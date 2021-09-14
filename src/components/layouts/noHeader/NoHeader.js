import React from "react";

import { Route } from "react-router-dom";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

// higher-order component to can use Hooks
function NoHeader() {
  return (
    <div>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </div>
  );
}

export default NoHeader;