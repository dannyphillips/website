import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";
import defaultLogo from '../logo.png'
import appsBackground from '../assets/apps-bg-small.png'

import { Layout, ProjectTile, Wrapper, SectionTitle } from "../components";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  background: url(${appsBackground}) repeat 0 0;
    width: 100%;
    margin: 0;
    text-align: center;
    height: 400px;
    padding-top: 120px;
    box-sizing: border-box;
    animation: slide 30s linear infinite;
  }
  @keyframes slide {
      from { background-position: 0 0; }
      to { background-position: 0 -400px; }
  }
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`;

const ProjectsPage = ({
  data: {
    allMdx: { edges: projects },
    allFile: { edges: logos }
  }
}) => (
  <Layout>
    <Hero>
    </Hero>
    <Content>
      <SectionTitle>My Apps</SectionTitle>
      {projects.map(project => {
        let projectLogo = logos.find(logo =>
              project.node.fields.slug.includes(logo.node.relativeDirectory)
            );
        return (<ProjectTile
          logo={projectLogo ? projectLogo.node.publicURL : defaultLogo}
          title={project.node.frontmatter.title}
          date={project.node.frontmatter.date}
          excerpt={project.node.excerpt}
          timeToRead={project.node.timeToRead}
          slug={project.node.fields.slug}
          tags={project.node.frontmatter.tags}
          key={project.node.fields.slug}
        />)
      }
      )}
    </Content>
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
            date(formatString: "MM/DD/YYYY")
            tags
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
