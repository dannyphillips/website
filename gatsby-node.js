const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  let slug

  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    }
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = require.resolve('./src/templates/blog.js')
  const projectTemplate = require.resolve('./src/templates/project.js')
  const tagTemplate = require.resolve('./src/templates/tag.js')

  const blogResults = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `)
  )
  const projectResults = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `)
  )

  const blogs = blogResults.data.allMdx.edges
  const projects = projectResults.data.allMdx.edges

  blogs.forEach((edge, index) => {
    const next = index === 0 ? null : blogs[index - 1].node
    const prev = index === blogs.length - 1 ? null : blogs[index + 1].node

    createPage({
      path: edge.node.fields.slug,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next,
      },
    })
  })

  projects.forEach((edge, index) => {
    const next = index === 0 ? null : projects[index - 1].node
    const prev = index === projects.length - 1 ? null : projects[index + 1].node

    createPage({
      path: edge.node.fields.slug,
      component: projectTemplate,
      context: {
        slug: edge.node.fields.project,
        prev,
        next,
      },
    })
  })

  const tagSet = new Set()

  blogs.forEach(edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      edge.node.frontmatter.tags.forEach(cat => {
        tagSet.add(cat)
      })
    }
  })
  projects.forEach(edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      edge.node.frontmatter.tags.forEach(cat => {
        tagSet.add(cat)
      })
    }
  })

  const tags = Array.from(tagSet)

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
