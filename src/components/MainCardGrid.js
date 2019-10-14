import React from 'react'
import { css } from '@emotion/core'
import get from 'lodash/get'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'
import { bpMinSM, bpMinMD, bpMinLG } from '../utils/breakpoints'
import Link from './link'
import Card from './card'

const ALL_CATEGORY = 'all'

const categoryOrder = {
  explainer: 1,
  sketchnotes: 2,
  meta: 3,
}

const MainCardGrid = ({ posts }) => {
  const categories = posts.reduce((currentCategories, nextPost) => {
    const newCategory = get(nextPost, 'node.frontmatter.category')
    if (isEmpty(newCategory)) {
      return currentCategories
    }
    if (!includes(currentCategories, newCategory)) {
      currentCategories.push(newCategory)
      currentCategories.sort((c1, c2) => {
        const c1Order = categoryOrder[c1] || 10
        const c2Order = categoryOrder[c2] || 10
        return c1Order - c2Order
      })
    }
    return currentCategories
  }, [])

  const [currentCategory, setCurrentCategory] = React.useState(ALL_CATEGORY)
  const handleCategoryClick = category => {
    if (category === currentCategory) {
      setCurrentCategory(ALL_CATEGORY)
    } else {
      setCurrentCategory(category)
    }
  }
  return (
    <div>
      {currentCategory}
      {categories.map(c => {
        return (
          <button key={c} onClick={() => handleCategoryClick(c)}>
            {c}
          </button>
        )
      })}
      <Grid posts={posts} currentCategory={currentCategory} />
    </div>
  )
}

function Grid({ posts, currentCategory }) {
  return (
    <div
      css={css({
        display: 'grid',
        gridGap: '25px',

        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr) )',

        a: {
          color: 'inherit',
        },
      })}>
      {posts.map(p => {
        return (
          <GridItem
            key={p.node.id}
            data={p.node}
            currentCategory={currentCategory}
          />
        )
      })}
    </div>
  )
}

function GridItem({ data, currentCategory }) {
  const itemCategory = get(data, 'frontmatter.category')
  const displayItem =
    currentCategory === ALL_CATEGORY ? true : itemCategory === currentCategory
  if (isEmpty(data) || !displayItem) {
    return null
  }
  return (
    <Link
      to={`/${data.frontmatter.slug}`}
      key={data.id}
      css={
        data.frontmatter.featured &&
        css({
          [bpMinSM]: {
            gridColumnStart: '1',
            gridColumnEnd: '3',
          },
        })
      }>
      <Card
        title={data.frontmatter.title}
        image={data.frontmatter.thumbnail.childImageSharp.fluid}
        featured={data.frontmatter.featured}
        description={data.frontmatter.description}
        date={data.frontmatter.date}
        category={data.frontmatter.category}
      />
    </Link>
  )
}

export default MainCardGrid
