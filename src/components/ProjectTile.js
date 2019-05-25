import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography
} from "@material-ui/core";

const AppCard = styled(Card)`
  display: flex;
  margin: 20px;
  padding: 10px;
  width: 400px;
`;
const Cover = styled(CardMedia)`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const Details = styled(CardContent)`
`;

const ProjectTile = ({
  appIcon,
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  tags
}) => {

  return (
    <AppCard>
      <Cover image={appIcon} title="Live from space album cover" />
      <Details>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {tags.map((tag) => (
            <Chip label={tag} key={tag}/>
          ))}
        </Typography>
      </Details>
    </AppCard>
  );
};

export default ProjectTile;

ProjectTile.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired
};
