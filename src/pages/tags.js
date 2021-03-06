import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from "../utils/kebabCase";

import { Layout, Cover, Wrapper, SectionTitle } from '../components'
import config from '../../config'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -10rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`

const TagsPage = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <Cover condensed/>
    <Wrapper>
      <Helmet title={`tags | ${config.siteTitle}`} />
    <Content>
      <SectionTitle>tags</SectionTitle>
      {group.map(tag => (
        <Title key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>{tag.fieldValue}</Link> ({tag.totalCount})
        </Title>
      ))}
    </Content>
    </Wrapper>
  </Layout>
)

export default TagsPage

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const tagsQuery = graphql`
  query tagsQuery {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
