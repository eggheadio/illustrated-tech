import React from 'react'
import {graphql} from 'gatsby'
import Link from '../components/link'
import {css} from '@emotion/core'
import SEO from '../components/seo'
import {bpMinSM, bpMinMD} from '../utils/breakpoints'
import Layout from '../components/layout'
import Container from '../components/container'
import Card from '../components/card'
import eggheadpwrd from '../images/egghead-powered.svg'
import MainCardGrid from '../components/MainCardGrid'

export default function Index({data: {site, allMdx, sketches}}) {
  console.log({allMdx})
  return (
    <>
      <SEO title={site.siteMetadata.title} />
      <Layout>
        <Container
          css={css({
            [bpMinMD]: {paddingTop: '50px', paddingBottom: 0},
            paddingTop: 'auto',
          })}
        >
          <h1
            css={css({
              textAlign: 'left',
              fontWeight: '600',
              clear: 'both',
              [bpMinMD]: {
                padding: '30px 0',
                fontSize: '4.4em',
              },
              fontSize: '3em',
              letterSpacing: '-0.02em',
            })}
          >
            Web development,
            <br />
            illustrated.
          </h1>

          {/* Article Grid Section */}
          <div
            css={css({
              display: 'grid',
              gridGap: '25px',

              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr) )',

              a: {
                color: 'inherit',
              },
            })}
          >
            <MainCardGrid posts={allMdx.edges} />
          </div>
        </Container>
        <Container
          noVerticalPadding
          maxWidth={900}
          css={css({
            [bpMinMD]: {
              padding: 'auto',
              paddingBottom: '30px',
            },
            padding: 0,
          })}
        >
          <Link
            to="https://egghead.io/"
            aria-label="Browse development courses on egghead.io"
          >
            <img
              css={css({
                margin: '80px auto 60px',
                display: 'flex',
              })}
              src={eggheadpwrd}
              alt="Powered by egghead.io"
            />
          </Link>
        </Container>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: {order: DESC, fields: [frontmatter___date, frontmatter___featured]}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            slug
            title
            featured
            description
            date(formatString: "MMMM DD, YYYY")
            category
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
