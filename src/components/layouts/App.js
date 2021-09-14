import React, { useState, useEffect } from "react";
import './App.scss';
import axios from "axios";

import HaveHeader from "./haveHeader/HaveHeader";
import NoHeader from "./noHeader/NoHeader";

import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Blogs from "../pages/blogs/Blogs";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";


// const LayoutHaveHeader = HaveHeader();
// const LayoutNoHeader = NoHeader(Login, Register)

function GetCurrentRoute() {
  const location = useLocation();
  return location.pathname
}

// higher-order function to can use Hooks
function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(async () => {
    const res = await axios.get('https://606b20daf8678400172e5aff.mockapi.io/users/blogs');
    setBlogs(res.data);
  }, []);

  let currentRoute = GetCurrentRoute();
  let haveHeader = (currentRoute != '/login' && currentRoute != '/register') ? true : false; 
  
  const popular = blogs.filter((blog) => {
    return blog.isPopular;
  });
  let numOfBlogs = blogs.length;
  const lastNewBlogs = [...blogs.slice(numOfBlogs - 4)];

  return (
    <div className="app">
      {haveHeader && <HaveHeader data={{
        blogs: blogs,
        popular: popular,
        lastNewBlogs: lastNewBlogs
        }}></HaveHeader>}
      {!haveHeader && <NoHeader></NoHeader>}
    </div>
  );
}

export default App;