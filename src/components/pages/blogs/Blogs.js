import React, { useEffect, useState } from "react";
import './Blogs.scss';
import axios from "axios";

import BlogItem from "../../blogItem/BlogItem";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import Loading from "../../loading/Loading";

export default function Blogs(props) {
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
      <div className="blogs">
        <div className="blogs_left">
          {blogs.map(blog => (
            <div className="blogs_left_item" key={blog.id} >
              <img className="item-img" src={blog.image} />
              <BlogItem
                title={blog.title}
                release={blog.release.slice(0, 10)}
                author={blog.author}
              >
                <p className="blog-content">
                  {blog.content.slice(0, 300)}...
                  <Link to="/">See More</Link>
                </p>
              </BlogItem>
            </div>
          ))}
        </div>
        <div className="blogs_right">
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