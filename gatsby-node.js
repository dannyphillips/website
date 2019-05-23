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

  const postTemplate = require.resolve('./src/templates/post.js')
  const tagTemplate = require.resolve('./src/templates/tag.js')

  const result = await wrapper(
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

  const posts = result.data.allMdx.edges

  posts.forEach((edge, index) => {
    const next = index === 0 ? null : posts[index - 1].node
    const prev = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: edge.node.fields.slug,
      component: postTemplate,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next,
      },
    })
  })

  const tagSet = new Set()

  posts.each(edge => {
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
