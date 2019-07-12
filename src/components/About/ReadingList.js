import React from "react";
import { Card } from "@material-ui/core";
import Helmet from "react-helmet";
import { Flex } from "../../components"

import "./ReadingList.css";

const ReadingList = () => (
  <Flex className="container">
    <h3>My Bookshelf</h3>
    {/* <Helmet>
      <script
        src="https://www.goodreads.com/review/custom_widget/74627569.Danny%20Phillips's%20bookshelf:%20to-read?cover_position=left&cover_size=medium&num_books=10&order=d&shelf=to-read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1558731336&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
        type="text/javascript"
        charset="utf-8"
      />
    </Helmet> */}
    <Card className="list" id="gr_custom_widget_1560404559" />
  </Flex>
);

export default ReadingList;
