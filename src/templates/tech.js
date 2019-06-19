import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import {
  Layout,
  Wrapper,
  Cover,
  Subline,
  BlogPostTile,
  SectionTitle
} from "../components";
import config from "../../config";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`;

const Tech = ({ pageContext: { tech }, data: { allMdx } }) => {
  const { edges, totalCount } = allMdx;
  const subline = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tech}"`;

  return (
    <Layout>
      <Cover condensed/>
      <Wrapper>
        <Helmet title={`tech: ${tech} | ${config.siteTitle}`} />
        <Content>
          <SectionTitle>{tech}</SectionTitle>
          <Subline sectionTitle>
            {subline} (See <Link to="/techs">all tech</Link>)
          </Subline>
          {edges.map(post => (
            <BlogPostTile
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              tags={post.node.frontmatter.techs}
              key={post.node.fields.slug}
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Tech;

Tech.propTypes = {
  pageContext: PropTypes.shape({
    tech: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired
    })
  }).isRequired
};

export const techQuery = graphql`
  query techsPage($tech: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { techs: { eq: $tech } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            techs
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
