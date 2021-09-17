import React, { useState, useEffect } from "react";
import './Header.scss';
import { useCookies } from 'react-cookie';
import axios from "axios";

import Navbar from '../navbar/Navbar';
import HotTopic from "../subTitleHotTopic/HotTopic";
import LoginBtn from "../buttons/loginBtn/LoginBtn";
import RegisterBtn from "../buttons/registerBtn/RegisterBtn";
import PostBtn from "../buttons/postBlog/PostBtn";
import LogoutBtn from "../buttons/logoutBtn/LogoutBtn";

export default function Header(props) {
  const [cookies, setCookie] = useCookies(['accessToken']);
  const hiddenLogoutBtn = cookies.accessToken ? false : true;

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
    <div className="header">
      <div className="logo">
        <h1 className="logo-text">STORY</h1>
      </div>
      <div className className="header-nav">
        <Navbar></Navbar>
        <div className="header-nav_btn">
          {hiddenLogoutBtn && <LoginBtn></LoginBtn>}
          {hiddenLogoutBtn && <RegisterBtn></RegisterBtn>}
          {!hiddenLogoutBtn && <LogoutBtn />}
          <PostBtn></PostBtn>
        </div>
      </div>
      <hr className="header_boundary"></hr>
      <div className="top-topic">
        <div className="top-topic_left">
          <HotTopic></HotTopic>
          <h4 className="hot-topic_title">
            {popular[0] ? popular[0].title : ''}
          </h4>
        </div>
        <div className="top-topic_right">
          <div className="newest top-topic_right_item">
            <h6 className="right_item_sub-title">NEWEST</h6>
            <h4 className="right_item_title">
              {lastNewBlogs[0] ? lastNewBlogs[0].title : ''}
            </h4>
          </div>
          <div className="top-1 top-topic_right_item">
            <h6 className="right_item_sub-title">TOP ONE</h6>
            <h4 className="right_item_title">
              {popular[0] ? popular[0].title : ''}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
