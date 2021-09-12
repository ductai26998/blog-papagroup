import React from "react";
import './Home.scss';
import image1 from '../../assets/images/middle.jpg';

import BlogItem from "../blogItem/BlogItem";
import HotTopic from "../subTitleHotTopic/HotTopic";
import { BrowserRouter, NavLink } from "react-router-dom";

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
          <BrowserRouter>
            <div className="category">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/"
                    activeClassName="selected"
                  ><span className="nav-item-text">LAST NEWS</span></NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/"
                  ><span className="nav-item-text">POPULAR</span></NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/"
                  >TOPIC</NavLink>
                </li>
              </ul>
            </div>
          </BrowserRouter>
          <div className="blog-list">
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
            <div className="category-blog-item">
              <img className="blog-item-img" src={image1} />
              <BlogItem></BlogItem>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;