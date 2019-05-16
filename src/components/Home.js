import React, { Fragment } from "react";
import styled from "styled-components";

import "./Home.css";

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <Fragment>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <TitleBlock>
      <div id="title">
        <span>Danny Phillips</span>
      </div>
      <div id="subtitle">
        <span>Developer. Adventurer. Dad.</span>
      </div>
    </TitleBlock>
  </Fragment>
);

export default Home;
