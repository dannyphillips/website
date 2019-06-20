import React from "react";
import { AppBar } from "@material-ui/core";
import styled from "styled-components";

const StyledBanner = styled(AppBar)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = () => (
  <StyledBanner position="static" color="secondary">
    Draft Mode: This post has not been published.
  </StyledBanner>
);

export default Banner;
