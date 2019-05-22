import React from 'react'

import { Layout, Maintenance } from '../components'

const ProjectsPage = () => (
  <Layout>
    <Maintenance />
  </Layout>
)

export default ProjectsPage

export const ProjectsQuery = graphql`
  query ProjectsQuery {
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
