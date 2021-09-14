import React, { useEffect, useState } from "react";

import Header from "../../header/Header";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Blogs from "../../pages/blogs/Blogs";

// higher-order component to can use Hooks
function HaveHeader(props) {
  console.log(props);
  return (
    <div>
      <Header></Header>
      <Route path="/" exact component={Home} />
      <Route path="/blogs" exact>
        <Blogs blogs={props.blogs} />
      </Route>
    </div>
  );

}

export default HaveHeader;