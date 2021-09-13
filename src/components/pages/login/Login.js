import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" ><h5 className="go-home">Go to Home</h5></Link>
            <h3 className="title">STORY</h3>
            <h5 className="welcome">Welcome to STORY</h5>
            <form>
              <label>Username</label>
              <input type="text" placeholder="Email" />
              <label>Password</label>
              <input type="password" placeholder="Password" />
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