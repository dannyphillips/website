import React from 'react'
import styled from "styled-components";

import { Cover, Layout, ExperienceTimeline } from '../components'
// import { Paper } from '@material-ui/core'

const TwoPanelLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
// const Main = styled.div`
//   flex: 2;
//   @media (max-width: ${props => props.theme.breakpoints.tablet}) {
//     width: 100%;
//   }
// `;

const Side = styled.div`
  flex: 1;
  min-width: 400px;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

// const Body = styled(Paper)`
//   margin: 40px;
//   padding: 40px;
//   height: 400px;
// `;

const ExperiencePage = () => (
  <Layout>
    <Cover>My Experience</Cover>
    <TwoPanelLayout>
      {/* <Main>
        <Body>
        Hello
        </Body>
      </Main> */}
      <Side>

    <ExperienceTimeline />
      </Side>
    </TwoPanelLayout>
  </Layout>
)

export default ExperiencePage
