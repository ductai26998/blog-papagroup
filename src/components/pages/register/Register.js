import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" style={{width: "110px"}}><h5 className="go-home">Go to Home</h5></Link>
            <h3 className="title">STORY</h3>
            <h5 className="welcome">Create new account</h5>
            <form>
              <label>Username</label>
              <input type="text" placeholder="Email" />
              <label>Password</label>
              <input type="password" placeholder="Password" />
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