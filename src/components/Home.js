import React from "react";
import styled from "styled-components";

import "./Home.css";

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 100px;
`;

const Home = () => (
  <div className="home-bg">
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div className="home-body">
      <TitleBlock>
        <div id="title">
          <span>Danny Phillips</span>
        </div>
        <div id="subtitle">
          <span>Developer. Adventurer. Dad.</span>
        </div>
      </TitleBlock>
    </div>
  </div>
);

export default Home;
