import React from 'react'
import styled from "styled-components";

import { Layout, ExperienceTimeline } from '../components'
import bg from '../assets/exp-bg-small.jpg'

const Cover = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const ExperiencePage = () => (
  <Layout>
    <Cover src={bg}/>
    <ExperienceTimeline />
  </Layout>
)

export default ExperiencePage
