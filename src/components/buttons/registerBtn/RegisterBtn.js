import React from "react";
import { Link } from "react-router-dom";
import './RegisterBtn.scss';

class RegisterBtn extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="btn-container">
          <Link to="/register">Sign up</Link>
      </div>
    );
  }
}

export default RegisterBtn;