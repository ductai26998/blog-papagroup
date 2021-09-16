import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from 'react-cookie';

import Loading from "../../loading/Loading";

import './Login.scss';

// initialize the variables receive content of the inputs
var username = "";
var password = "";

function onKeyUp(event) {
  /* 
    get new value when the value of input changes and
    assign it for the initialized variable in constructor
  */
  let target = event.target.id;
  if (target == 'input-username') {
    username = event.target.value;
  } else {
    password = event.target.value;
  }
}

function validate() {
  // validate the input value
  let error = "";
  if (!username.trim()) {
    error += "Username can not be empty!!!";
  }
  if (!password.trim()) {
    error += "\n Password can not be empty!!!";
  }
  return error;
}

export default function Login() {
  const [cookies, setCookie] = useCookies(['accessToken']);

  let signIn = (event) => {
    // prevent auto submit when sign in
    event.preventDefault();

    // validate the input value
    var error = validate();

    // show loading screen
    const loading = document.querySelector('.loading');
    loading.classList.add('show');

    // check username and passord from database
    axios.get('https://606b20daf8678400172e5aff.mockapi.io/users/users', {
      params: {
        username: username
      }
    })
      .then((response) => {
        let currentUser = response.data.find((user) => user.username == username);
        if (!currentUser) {
          error += "\n Username is wrong!!!";
        } else {
          if (currentUser.password !== password) {
            error += "\n Password is wrong!!!";
          }
        }

        if (error) {
          alert(error);
          loading.classList.remove('show');
        } else {
          setCookie('accessToken', currentUser.id);
          window.location.href = "/";
        }
      }).catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className="wrapper-login">
        <div className="mycontainer">
          <div className="container__right">
            <Link to="/" ><h5 className="go-home">Go to Home</h5></Link>
            <h3 className="title">STORY</h3>
            <h5 className="welcome">Welcome to STORY</h5>
            <form onSubmit={signIn}>
              <label>Username</label>
              <input id="input-username" type="text" placeholder="Username" onKeyUp={onKeyUp} />
              <label>Password</label>
              <input id="input-password" type="password" placeholder="Password" onKeyUp={onKeyUp} />
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
      <div className="loading"><Loading /></div>
    </div>
  );
};