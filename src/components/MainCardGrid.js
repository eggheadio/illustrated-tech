import React from 'react'
import {css} from '@emotion/core'
import get from 'lodash/get'
import {bpMinSM, bpMinMD, bpMinLG} from '../utils/breakpoints'
import Link from '../components/link'

const MainCardGrid = ({posts}) => {
  const categories = posts.reduce((currentCategories, nextPost) => {
    const newCategory = get(nextPost, 'node.frontmatter.category')
    console.log({nextPost})
    console.log({newCategory})
  }, [])
  return <div />
}

function Card({data}) {
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
      }
    >
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
