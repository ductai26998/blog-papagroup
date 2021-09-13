import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './LoginBtn.scss';

class LoginBtn extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="btn-container">
        {/* <BrowserRouter> */}
          <Link to="/login">Sign In</Link>
        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default LoginBtn;