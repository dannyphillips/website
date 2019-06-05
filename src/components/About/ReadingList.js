import React from "react";

class ReadingList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://www.goodreads.com/review/custom_widget/74627569.Danny%20Phillips's%20bookshelf:%20to-read?cover_position=left&cover_size=medium&num_books=10&order=d&shelf=to-read&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1558731336&widget_text_color=000000&widget_title_size=medium&widget_width=medium";
    script.async = true;

    this.instance.appendChild(script);
  }

  render() {
    return (
      <div>
        <div ref={el => (this.instance = el)} />
        Insert Books here
      </div>
    );
  }
}

export default ReadingList;
