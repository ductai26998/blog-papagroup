import React from "react";
import './BlogItem.scss';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, release, author } = this.props;

    return (
      <div className="blog-item">
        <h4 className="blog-title">
          {title}
        </h4>
        {this.props.children}
        <div className="blog-info">
          <span className="blog-info_time">Upload at {release} by </span>
          <span className="blog-info_author">{author}</span>
        </div>
      </div>
    );
  }
}

export default BlogItem;