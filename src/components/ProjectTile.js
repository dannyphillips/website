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
  border-radius: 40px !important;
`;
const Cover = styled(CardMedia)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 32px;
  border: solid lightgrey 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
