const _ = require("lodash");

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

// add slugs as node to each page
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;

  if (node.internal.type === "Mdx") {
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = require.resolve("./src/templates/blog.js");
  const projectTemplate = require.resolve("./src/templates/project.js");
  const tagTemplate = require.resolve("./src/templates/tag.js");
  const techTemplate = require.resolve("./src/templates/tech.js");

  // get all blogs
  const blogResults = await wrapper(
    graphql(`
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/blog/" } }
        ) {
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
  );

  // get all projects
  const projectResults = await wrapper(
    graphql(`
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                techs
              }
            }
          }
        }
      }
    `)
  );
  const blogs = blogResults.data.allMdx.edges;
  const projects = projectResults.data.allMdx.edges;

  // create all blog pages
  blogs.map((edge, index) => {
    const next = index === 0 ? null : blogs[index - 1].node;
    const prev = index === blogs.length - 1 ? null : blogs[index + 1].node;

    createPage({
      path: `/blog${edge.node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next
      }
    });
  });

  // create all project pages
  projects.map((edge, index) => {
    const next = index === 0 ? null : projects[index - 1].node;
    const prev =
      index === projects.length - 1 ? null : projects[index + 1].node;
    createPage({
      path: `/projects${edge.node.fields.slug}`,
      component: projectTemplate,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next
      }
    });
  });

  // create all tags from blogs and projects
  const tagSet = new Set();
  blogs.map(edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      edge.node.frontmatter.tags.forEach(cat => {
        tagSet.add(cat);
      });
    }
  });
  projects.map(edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      edge.node.frontmatter.tags.forEach(cat => {
        tagSet.add(cat);
      });
    }
  });

  // create all tag pages from tags
  const tags = Array.from(tagSet);
  tags.map(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}`,
      component: tagTemplate,
      context: {
        tag
      }
    });
  });

  // create all techs from projects
  const techSet = new Set();
  projects.map(edge => {
    if (_.get(edge, "node.frontmatter.techs")) {
      edge.node.frontmatter.techs.forEach(tech => {
        techSet.add(tech);
      });
    }
  });

  // create all tech pages
  const techs = Array.from(techSet);
  techs.map(tech => {
    createPage({
      path: `/techs/${_.kebabCase(tech)}`,
      component: techTemplate,
      context: {
        tech
      }
    });
  });
};
