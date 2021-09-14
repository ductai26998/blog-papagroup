import React, { useEffect, useState } from "react";

import Header from "../../header/Header";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Blogs from "../../pages/blogs/Blogs";

// higher-order component to can use Hooks
function HaveHeader(props) {
  return (
    <div>
      <Header data={props.data}></Header>
      <Route path="/" exact >
        <Home data={props.data} />
      </Route>
      <Route path="/blogs" exact >
        <Blogs data={props.data} />
      </Route>
    </div>
  );

}

export default HaveHeader;