import React from "react";
import { Link } from "react-router-dom";
import './PostBtn.scss';

class PostBtn extends React.Component {
  render() {
    return (
      <div className="btn-container">
          <Link to="/postBlog">Post new blog</Link>
      </div>
    );
  }
}

export default PostBtn;