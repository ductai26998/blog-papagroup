import React from "react";

import Header from "../../header/Header";
import { Route } from "react-router-dom";

// higher-order component to can use Hooks
function HaveHeader(Home) {
  return class extends React.Component {
    render() {
      return (
        <div className="app">
          <Header></Header>
          <Route path="/" exact component={Home} />
        </div>
      );
    }
  }
}

export default HaveHeader;