import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { bpMinSM } from '../utils/breakpoints'
import ResourceCard from '../components/resourceCard.js'
import ResourceBook from '../components/resourceBook.js'
import {
  resourceCourses,
  resourceBooks,
} from '../../content/static_content/resourceData'

export default function ResourcesPage() {
  return (
    <>
      <SEO title='Resources' />
      <Layout>
        <Container>
          <h1
            css={css({
              [bpMinSM]: {
                fontSize: '3.4rem',
              },
              textAlign: 'center',
              marginBottom: '40px',
              fontFamily: 'ff-tisa-web-pro, serif',
            })}>
            Resources
          </h1>
          <hr />
          <h2
            css={css({
              textAlign: 'center',
            })}>
            Learning Platforms & Courses
          </h2>
          <div
            css={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr) )',
              alignItems: 'center',
            })}>
            {resourceCourses.map((d, i) => {
              return (
                <ResourceCard
                  key={i}
                  title={d.title}
                  description={d.description}
                  image={d.img}
                  cost={d.cost}
                  url={d.url}
                />
              )
            })}
          </div>
          <hr />

          <h2
            css={css({
              textAlign: 'center',
            })}>
            Books
          </h2>
          <div
            css={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr) )',
              alignItems: 'center',
            })}>
            {resourceBooks.map((d, i) => {
              return (
                <ResourceBook
                  key={i}
                  title={d.title}
                  description={d.description}
                  image={d.img}
                  url={d.url}
                  author={d.author}
                />
              )
            })}
          </div>
        </Container>
      </Layout>
    </>
  )
}
