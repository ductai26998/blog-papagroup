import React from "react";

import { Route } from "react-router-dom";

// higher-order component to can use Hooks
function NoHeader(Login, Register) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      );
    }
  }
}

export default NoHeader;