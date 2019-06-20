import React from "react";
import { Layout, Bio, SocialLinks, Skills, ReadingList, Flex } from "../components";

const AboutPage = () => (
  <Layout>
    <Bio />
    <Flex>
      {/* <ReadingList /> */}
      <Skills />
    </Flex>
    <SocialLinks />
  </Layout>
);

export default AboutPage;
