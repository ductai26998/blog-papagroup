import React from "react";
import { Link } from "react-router-dom";
import './PostBlog.scss';

class PostBlog extends React.Component {
  render() {
    return (
      <div class="post-container container">
        <div class="post-container__header">
          <div class="page-logo"><span class="logo-text">STORY</span></div>
          <h3 class="post-title">Post to blogs</h3>
        </div>
        <form class="post-container__form">
          <div class="blog-title">
            <label>Title: </label>
            <input
              class="input-title"
              type="text"
              placeholder="Your blog title"
              v-model="title"
            />
          </div>
          <div class="post-option">
            <div class="post-option__content"></div>
          </div>
          <div class="post-box">
            <div class="post-box__text" v-show="inTextInput">
              <textarea
                name=""
                id=""
                class="post-box__text--input"
                cols="30"
                rows="16"
                v-model="content"
              ></textarea>
            </div>
            <div class="post-box__send">
              <button type="submit" class="btn-send"></button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PostBlog;