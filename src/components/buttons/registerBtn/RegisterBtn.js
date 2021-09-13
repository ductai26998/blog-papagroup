import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './RegisterBtn.scss';

class RegisterBtn extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="btn-container">
        <BrowserRouter>
          <Link to="/register">Sign up</Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default RegisterBtn;