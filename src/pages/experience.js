import React from 'react'
import styled from "styled-components";

import { Layout, ExperienceTimeline } from '../components'
import bg from '../assets/exp-bg-small.jpg'

const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  font-weight: bold;
  color: black;
  background-image: url(${bg});
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media only screen and (max-width: 1169px) {
    font-size: 48px;
    height: 150px;
  }
`;

const TwoPanelLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
const Main = styled.div`
  flex: 2;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const Side = styled.div`
  flex: 1;
  min-width: 400px;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const ExperiencePage = () => (
  <Layout>
    <Cover>My Experience</Cover>
    <TwoPanelLayout>
      <Main>
        Hello
      </Main>
      <Side>

    <ExperienceTimeline />
      </Side>
    </TwoPanelLayout>
  </Layout>
)

export default ExperiencePage
