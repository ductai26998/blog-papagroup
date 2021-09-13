import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './Login.scss';

class Login extends React.Component {
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
            <h5 className="welcome">Welcome to STORY</h5>
            <form>
              <label for="username">Email</label>
              <input type="text" value={this.state.email} placeholder="Email" />
              <label for="password">Password</label>
              <input type="password" value={this.state.password} placeholder="Password" />
              <span>Forgot password?</span>
              <div className="submit">
                <button type="submit">Sign in</button>
              </div>
            </form>
            <h6 className="or">or</h6>
            <p className="new-user">
              New User?
              <span className="to-register"
              ><Link to="/register">Create Account</Link></span
              >
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default Login;