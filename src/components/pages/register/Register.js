import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="mycontainer">
          <div className="container__left"></div>
          <div className="container__right">
            <h3 className="title">STORY</h3>
            <h5 className="welcome">Create new account</h5>
            <form>
              <label for="username">Email</label>
              <input type="text" value={this.state.email} placeholder="Email" />
              <label for="password">Password</label>
              <input type="password" value={this.state.password} placeholder="Password" />
              <div className="submit">
                <button type="submit">Sign up</button>
              </div>
            </form>
            <h6 className="or">or</h6>
            <p className="haved-account">
              If you haved account?
              <span><Link to="/login">Sign in here</Link></span
              >
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default Register;