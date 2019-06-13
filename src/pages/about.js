import React from "react";
import { Layout, Bio, SocialLinks, Skills, ReadingList } from "../components";

const AboutPage = () => (
  <Layout>
    <Bio />
    <Skills />
    <ReadingList />
    <SocialLinks />
  </Layout>
);

export default AboutPage;
