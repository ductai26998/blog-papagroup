import React from "react";
import { Link } from "react-router-dom";
import './LoginBtn.scss';

class LoginBtn extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="btn-container">
          <Link to="/login">Sign In</Link>
      </div>
    );
  }
}

export default LoginBtn;