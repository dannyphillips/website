import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Wrapper } from '../components'

const IndexPage = () => (
  <Layout>
    <Wrapper>Here is the index page</Wrapper>
  </Layout>
)

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            tags
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
