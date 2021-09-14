import React from "react";

import Header from "../../header/Header";
import { Route } from "react-router-dom";
import Blogs from "../../pages/blogs/Blogs";

// higher-order component to can use Hooks
function HaveHeader(Home) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Header></Header>
          <Route path="/" exact component={Home} />
          <Route path="/blogs" exact component={Blogs} />
        </div>
      );
    }
  }
}

export default HaveHeader;