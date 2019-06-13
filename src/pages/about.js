import React from 'react'
import styled from 'styled-components'
// import Helmet from "react-helmet";

import { Layout, Cover, SocialLinks } from '../components'
// import { ReadingList } from '../components'

const Container = styled.div`
  padding: 40px;
  margin: 20px;
  border: 2px solid black;
`;
const AboutPage = () => (
  <Layout>
    <Cover>About Me</Cover>
    {/* <Helmet>
      <script
        src="https://www.goodreads.com/review/custom_widget/74627569.Danny%20Phillips's%20bookshelf:%20to-read?cover_position=left&cover_size=medium&num_books=10&order=d&shelf=to-read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1558731336&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
        type="text/javascript"
        charset="utf-8"
      />
    </Helmet>
    <ReadingList /> */}
    <Container>My Bio</Container>
    <Container>My Skills</Container>
    <Container>Insert Reading List</Container>
    <Container><SocialLinks/></Container>
    <Container>Link to Resume</Container>
  </Layout>
);

export default AboutPage
