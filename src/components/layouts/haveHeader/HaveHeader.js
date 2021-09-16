import React from "react";
import { useCookies } from 'react-cookie';

import Header from "../../header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Blogs from "../../pages/blogs/Blogs";
import PostBlog from "../../pages/postBlog/PostBlog";

// higher-order component to can use Hooks
function HaveHeader(props) {
  const [cookies] = useCookies(['accessToken']);
  console.log(cookies.accessToken);

  return (
    <div style={{ position: 'relative' }}>
      <Header data={props.data}></Header>
      <div style={{
        paddingBottom: '50px',
        backgroundColor: '#f2ece8'
      }}>
        {/* <Switch> */}
          <Route path="/" exact >
            <Home data={props.data} />
          </Route>
          <Route path="/blogs" exact >
            <Blogs data={props.data} />
          </Route>
          <Route path="/postBlog" exact render={() => {
            return cookies.accessToken ? <PostBlog/> : <Redirect to="/login" />;
          }}>
          </Route>
        {/* </Switch> */}
      </div>
    </div >
  );

}

export default HaveHeader;