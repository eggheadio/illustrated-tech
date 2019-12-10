// import React from 'react'
// import { css } from '@emotion/core'
// import { useStaticQuery, graphql } from 'gatsby'
// import SEO from '../components/seo'
// import { bpMinMD } from '../utils/breakpoints'
// import Layout from '../components/layout'
// import Container from '../components/container'
// import Card from '../components/card'
// import Link from '../components/link'

// const MetaPage = ({ data: { site, meta } }) => {
//   const data = useStaticQuery(graphql`
//     query MetaQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//       meta: allMdx(
//         sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
//         filter: { fields: { collection: { eq: "meta" } } }
//       ) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               slug
//               date
//               title
//               description
//               tags
//               thumbnail {
//                 childImageSharp {
//                   fluid(maxWidth: 500) {
//                     ...GatsbyImageSharpFluid_withWebp_tracedSVG
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <SEO title='Meta' />
//       <Layout>
//         <Container>
//           <h1
//             css={css({
//               [bpMinMD]: {
//                 fontSize: '3.2rem',
//                 margin: '10px auto 20px',
//               },
//               fontSize: '2.4rem',
//               textAlign: 'center',
//               fontWeight: '100',
//               margin: '20px auto 20px',
//               fontFamily: 'ff-tisa-web-pro, serif',
//             })}>
//             The Metalayer
//           </h1>
//           <h3
//             css={css({
//               textAlign: 'center',
//               marginBottom: '2em',
//             })}>
//             Insights into the process & craft behind the articles
//           </h3>
//           <hr />
//           <div
//             css={css({
//               display: 'grid',
//               gridGap: '25px',
//               gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr) )',
//               a: {
//                 color: 'inherit',
//               },
//             })}>
//             {meta.edges.map(({ node: data }) => (
//               <Link to={`/meta/${data.frontmatter.slug}`} key={data.id}>
//                 <Card
//                   title={data.frontmatter.title}
//                   image={data.frontmatter.thumbnail.childImageSharp.fluid}
//                   description={data.frontmatter.description}
//                   tags={data.frontmatter.tags}
//                 />
//               </Link>
//             ))}
//           </div>
//         </Container>
//       </Layout>
//     </>
//   )
// }

// export default MetaPage
