const config = require("./config");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          blog: require.resolve("./src/templates/blog.js"),
          project: require.resolve("./src/templates/project.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 830,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              maintainCase: false,
            },
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 830,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
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
        icon: config.favicon,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-released",
      options: {
        fieldName: "released",
        fieldNameNotForced: "releasedNotForced",
        timezone: "UTC",
        force: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
        plugins: [
          "gatsby-tinacms-mdx",
          {
            resolve: "gatsby-tinacms-git",
            options: {
              pathToRepo: REPO_ABSOLUTE_PATH,
              pathToContent: "src",
              defaultCommitMessage: "Edited with TinaCMS",
              defaultCommitName: "TinaCMS",
              defaultCommitEmail: "git@tinacms.org",
              pushOnCommit: false,
            },
          },
        ],
      },
    },
  ],
};
