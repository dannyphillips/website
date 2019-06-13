import React from "react";
import styled from "styled-components";

import { Layout, Cover, SocialLinks, ReadingList } from "../components";

const Container = styled.div`
  padding: 40px;
  margin: 20px;
  border: 2px solid black;
`;
const AboutPage = () => (
  <Layout>
    {/* <Cover>About Me</Cover> */}
    <Container>My Bio</Container>
    <Container>My Skills</Container>
    <ReadingList />
    <SocialLinks />
    <Container>Link to Resume</Container>
  </Layout>
);

export default AboutPage;
