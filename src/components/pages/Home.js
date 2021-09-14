import React from "react";
import './Home.scss';

import BlogItem from "../blogItem/BlogItem";
import HotTopic from "../subTitleHotTopic/HotTopic";
import { BrowserRouter, NavLink } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {blogs, popular, lastNewBlogs} = this.props.data;

    return (
      <div className="home">
        <div className="home_left">
          <div className="hot-topic">
            {popular.map(blog => (
              <div className="hot-topic-item" key={blog.id}>
                <HotTopic></HotTopic>
                <BlogItem
                  title={blog.title}
                  release={blog.release.slice(0, 10)}
                ></BlogItem>
              </div>
            ))}
          </div>
          <div className="home_middle"
            style={{
              backgroundImage: popular[0] ? `url(${popular[0].image})` : ''
            }}
          ></div>
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
            {lastNewBlogs.map(blog => (
              <div className="category-blog-item" key={blog.id}>
                <img className="blog-item-img" src={blog.image} />
                <BlogItem
                  title={blog.title}
                  release={blog.release.slice(0, 10)}
                ></BlogItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;