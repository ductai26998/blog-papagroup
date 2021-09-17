import React from "react";
import { useCookies } from 'react-cookie';

import Header from "../../header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Blogs from "../../pages/blogs/Blogs";
import PostBlog from "../../pages/postBlog/PostBlog";

// higher-order component to can use Hooks
function HaveHeader(props) {
  const [cookies, setCookie] = useCookies(['accessToken']);

  const style = {
    paddingBottom: '50px',
    backgroundColor: '#f2ece8'
  }
  return (
    <div style={{ position: 'relative' }}>
      <Route path="/" exact >
        <div style={style}>
          <Header data={props.data}></Header>
          <Home data={props.data} />
        </div>
      </Route>
      <Route path="/blogs" exact >
        <div style={style}>
          <Header data={props.data}></Header>
          <Blogs data={props.data} />
        </div>
      </Route>
      <Route path="/postBlog" exact render={() => {
        return cookies.accessToken ?
          <div style={style}>
            <Header data={props.data}></Header>
            <PostBlog />
          </div> : <Redirect to="/login" />;
      }}>
      </Route>
    </div >
  );

}

export default HaveHeader;