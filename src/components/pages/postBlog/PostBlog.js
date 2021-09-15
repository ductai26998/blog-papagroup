import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import './PostBlog.scss';

class PostBlog extends React.Component {
  constructor(props) {
    super(props);

    this.title = "";
    this.content = "";

    this.onKeyUp = this.onKeyUp.bind(this);
    this.post = this.post.bind(this);
  }

  post = (event) => {
    // prevent auto submit when new blog is not posted
    event.preventDefault();

    const date = new Date();
    const release = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const newBlog = {
      title: this.title,
      content: this.content,
      release: release
    }

    axios.post('https://606b20daf8678400172e5aff.mockapi.io/users/blogs', newBlog)
      .then((response) => {
        window.location.href = "/blogs";
      }).catch((error) => {
        alert(error);
      });
  }

  onKeyUp(event) {
    let target = event.target.id;
    if (target == 'input-title') {
      this.title = event.target.value;
    } else {
      this.content = event.target.value;
    }
  }

  render() {
    console.log("render");
    return (
      <div className="post-container container">
        <div className="post-container__header">
          <div className="page-logo"><span className="logo-text">STORY</span></div>
          <h3 className="post-title">Post to blogs</h3>
        </div>
        <form onSubmit={this.post} className="post-container__form">
          <div className="blog-title">
            <label>Title: </label>
            <input
              id="input-title"
              className="input-title"
              type="text"
              placeholder="Your blog title"
              onKeyUp={this.onKeyUp}
            />
          </div>
          <div className="post-option">
            <div className="post-option__content"></div>
          </div>
          <div className="post-box">
            <div className="post-box__text" v-show="inTextInput">
              <textarea
                name=""
                id="input-content"
                className="post-box__text--input"
                cols="30"
                rows="16"
                onKeyUp={this.onKeyUp}
              ></textarea>
            </div>
            <div className="post-box__send">
              <button type="submit" className="btn-send"></button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PostBlog;