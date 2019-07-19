const config = require("./config");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: `${__dirname}/projects`
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          blog: require.resolve("./src/templates/blog.js"),
          project: require.resolve("./src/templates/project.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 830,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              maintainCase: false
            }
          }
        ],
        plugins: [{
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 830,
            quality: 90,
            withWebp: true,
            linkImagesToOriginal: false
          }
        }]
      }
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitleAlt,
        short_name: config.siteTitleManifest,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: config.favicon
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-released",
      options: {
        fieldName: "released",
        fieldNameNotForced: "releasedNotForced",
        timezone: "UTC",
        force: process.env.NODE_ENV === "development"
      }
    }
  ]
};
