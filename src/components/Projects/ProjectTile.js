import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import kebabCase from "../../utils/kebabCase";
import { Flex, Subline } from "../../components";
import {
  Card,
  CardMedia,
  Chip,
  Typography
} from "@material-ui/core";

const AppCard = styled(Card)`
  display: flex;
  margin: 20px;
  padding: 10px;
  width: 400px;
  border-radius: 40px !important;
  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
  }
`;
const Cover = styled(CardMedia)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 32px;
  border: solid lightgrey 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Details = styled.div`
  margin: 10px 20px;
`;

const ProjectTile = ({ appIcon, title, slogan, slug, tags }) => {
  return (
    <AppCard>
      <Link to={`/projects${slug}`}>
        <Cover image={appIcon} title="Live from space album cover" />
      </Link>
      <Details>
        <Flex direction="column" justify="space-around" align="flex-start">
          <Link to={`/projects${slug}`}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Subline>{slogan}</Subline>
          </Link>
          <div>
            {tags.map(tag => (
              <Link to={`/tags/${kebabCase(tag)}`} key={tag}>
                <Chip label={tag} />
              </Link>
            ))}
          </div>
        </Flex>
      </Details>
    </AppCard>
  );
};

export default ProjectTile;

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
};
