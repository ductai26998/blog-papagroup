import React from "react";

import Header from "../../header/Header";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Blogs from "../../pages/blogs/Blogs";
import PostBlog from "../../pages/postBlog/PostBlog";

// higher-order component to can use Hooks
function HaveHeader(props) {
  return (
    <div style={{position: 'relative'}}>
      <Header data={props.data}></Header>
      <div style={{
        paddingBottom: '50px',
        backgroundColor: '#f2ece8'
      }}>
        <Route path="/" exact >
          <Home data={props.data} />
        </Route>
        <Route path="/blogs" exact >
          <Blogs data={props.data} />
        </Route>
        <Route path="/postBlog" exact >
          <PostBlog data={props.data} />
        </Route>
      </div>
    </div >
  );

}

export default HaveHeader;