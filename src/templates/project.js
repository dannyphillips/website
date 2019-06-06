import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

import { Layout, Wrapper, Subline, SEO, PrevNext } from "../components";
import ProjectHeader from "../components/Projects/ProjectHeader";

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4.5rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }

  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const ProjectContent = styled.div`
  margin-top: 4rem;
`;

const Project = ({
  pageContext: { slug, prev, next },
  data: { mdx: projectNode }
}) => {
  const project = projectNode.frontmatter;

  return (
    <Layout customSEO>
      Thiss is a project page
      <Wrapper>
        <SEO postPath={slug} postNode={projectNode} article />
        <ProjectHeader>
          <Link to="/projects">Back to Projects</Link>
        </ProjectHeader>
        <Content>
          <Title>{project.title}</Title>
          <Subline>
            {project.date} &mdash; {projectNode.timeToRead} Min Read &mdash; In{" "}
            {project.tags.map((cat, i) => (
              <React.Fragment key={cat}>
                {!!i && ", "}
                <Link to={`/tags/${kebabCase(cat)}`}>{cat}</Link>
              </React.Fragment>
            ))}
          </Subline>
          <ProjectContent>
            <MDXRenderer>{projectNode.code.body}</MDXRenderer>
          </ProjectContent>
          <PrevNext prev={prev} next={next} />
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
