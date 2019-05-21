import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Wrapper, Home } from '../components'

const ExperiencePage = () => (
  <Layout>
    <Wrapper>
      <Home />
    </Wrapper>
  </Layout>
)

export default ExperiencePage

export const ExperienceQuery = graphql`
  query ExperienceQuery {
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
