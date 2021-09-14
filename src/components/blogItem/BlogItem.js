import React from "react";
import './BlogItem.scss';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="blog-item">
        <h4 className="blog-title">
          Developing employability skills in Higher Education and at work
        </h4>
        {this.props.children}
        <div className="blog-info">
          <span className="blog-info_time">30 minutes ago by </span>
          <span className="blog-info_author">Ductai</span>
        </div>
      </div>
    );
  }
}

export default BlogItem;