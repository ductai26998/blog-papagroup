import React from "react";
import './Home.scss';

import BlogItem from "../blogItem/BlogItem";
import HotTopic from "../subTitleHotTopic/HotTopic";

class Home extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="home">
        <div className="home_left">
          <div className="hot-topic">
            <div className="hot-topic-item">
              <HotTopic></HotTopic>
              <BlogItem></BlogItem>
            </div>
            <div className="hot-topic-item">
              <HotTopic></HotTopic>
              <BlogItem></BlogItem>
            </div>
            <div className="hot-topic-item">
              <HotTopic></HotTopic>
              <BlogItem></BlogItem>
            </div>
          </div>
          <div className="home_middle"></div>
        </div>
        <div className="home_right">
          <div className="category"></div>
          <div className="blog-list"></div>
        </div>
      </div>
    );
  }
}

export default Home;