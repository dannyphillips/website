import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import defaultLogo from "../logo.png";
import appsBackground from "../assets/apps-bg-small.png";

import { Cover, Flex, Layout, ProjectTile } from "../components";

const AppsCover = styled(Cover)`
  background: url(${appsBackground}) repeat 0 0;
  animation: slide 30s linear infinite;
  @keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -400px;
    }
  }
  margin-bottom: 40px;
`;
const AppsContainer = styled(Flex)`
  margin-top: 40px;
`;

const ProjectsPage = ({
  data: {
    allMdx: { edges: projects },
    allFile: { edges: logos }
  }
}) => (
  <Layout>
    <AppsCover>My Apps</AppsCover>
    <AppsContainer>
      {projects.map(project => {
        let projectLogo = logos.find(logo =>
          project.node.fields.slug.includes(logo.node.relativeDirectory)
        );
        return (
          <ProjectTile
            appIcon={projectLogo ? projectLogo.node.publicURL : defaultLogo}
            title={project.node.frontmatter.title}
            slogan={project.node.frontmatter.slogan}
            slug={project.node.fields.slug}
            tags={project.node.frontmatter.tags}
            key={project.node.fields.slug}
          />
        );
      })}
    </AppsContainer>
  </Layout>
);

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired
    }),
    allFiles: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export default ProjectsPage;

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    allFile(
      filter: {
        name: { regex: "/logo/" }
        extension: { regex: "/png|jpg/" }
        absolutePath: { regex: "/projects/" }
      }
    ) {
      edges {
        node {
          publicURL
          relativeDirectory
        }
      }
    }
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
            slogan
            date(formatString: "MM/DD/YYYY")
            tags
          }
        }
      }
    }
  }
`;
