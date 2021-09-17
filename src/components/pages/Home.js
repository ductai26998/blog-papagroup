import React, {useState, useEffect} from "react";
import axios from "axios";
import './Home.scss';

import BlogItem from "../blogItem/BlogItem";
import HotTopic from "../subTitleHotTopic/HotTopic";
import Loading from "../loading/Loading";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Home(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(async () => {
    const res = await axios.get('https://606b20daf8678400172e5aff.mockapi.io/users/blogs');
    setBlogs(res.data.reverse());

    setTimeout(() => {
      // show loading screen
      const loading = document.querySelector('.loading');
      loading.classList.remove('show');
    }, 3000);
  }, [])

  // filter the pupular blogs with condition blogItem.popular == true
  const popular = blogs.filter((blog) => {
    return blog.isPopular;
  });
  // get 4 blog newest
  const lastNewBlogs = [...blogs.slice(0, 4)];

  return (
    <div>
      <div className="home">
        <div className="home_left">
          <div className="hot-topic">
            {popular.map(blog => (
              <div className="hot-topic-item" key={blog.id}>
                <HotTopic></HotTopic>
                <BlogItem
                  title={blog.title}
                  release={blog.release.slice(0, 10)}
                  author={blog.author}
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
                  author={blog.author}
                ></BlogItem>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="loading show"><Loading /></div>
    </div>
  );
}
