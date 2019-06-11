import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { Chip } from "@material-ui/core";

import { Cover, Layout, Wrapper, SEO, PrevNext } from "../components";
import source from "../assets/source-code.png";
import demo from "../assets/demo.png";

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const ProjectContent = styled.div`
  margin-top: 4rem;
`;

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 3rem 6rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }`;
const Icon = styled.img`
  width: 40px;
`;

const Project = ({
  pageContext: { slug, prev, next },
  data: { mdx: projectNode }
}) => {
  const project = projectNode.frontmatter;
  return (
    <Layout customSEO>
      <Cover condensed />
      <Wrapper>
        <SEO postPath={slug} postNode={projectNode} article />
        <Content>
          <Title>{project.title}</Title>
          <div>{project.slogan}</div>
          <Link to={project.source}>
            Source Code: <Icon src={source} alt="source" />
          </Link>
          <Link to={project.demo}>
            Demo: <Icon src={demo} alt="demo" />
          </Link>
          <div>
            Tech:{" "}
            {project.techs.map(tech => (
              <Chip label={tech} />
            ))}
          </div>

          <div>
            Tags:{" "}
            {project.tags.map(tag => (
              <Chip label={tag} />
            ))}
          </div>
          <ProjectContent>
            <MDXRenderer>{projectNode.code.body}</MDXRenderer>
          </ProjectContent>
          <PrevNext prefix={`/projects`} prev={prev} next={next} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired
  }).isRequired
};

Project.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null
  })
};

export const projectQuery = graphql`
  query projectBySlug($slug: String!) {
    mdx(
      fields: { slug: { eq: $slug } }
      fileAbsolutePath: { regex: "/projects/" }
    ) {
      code {
        body
      }
      frontmatter {
        title
        slogan
        date(formatString: "MM/DD/YYYY")
        source
        demo
        techs
        tags
      }
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`;
