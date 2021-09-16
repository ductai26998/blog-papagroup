import React from "react";
import { Link } from "react-router-dom";
import './Register.scss';
import axios from "axios";
import Loading from "../../loading/Loading";

// initialize the variables receive content of the inputs
var username = "";
var password = "";
var rePassword = "";

function onKeyUp(event) {
  /* 
    get new value when the value of input changes and
    assign it for the initialized variable in constructor
  */
  let target = event.target.id;
  if (target == 'input-username') {
    username = event.target.value;
  } else if (target == 'input-password') {
    password = event.target.value;
  } else {
    rePassword = event.target.value;
  }
}

function validate() {
  // validate the input value
  let error = "";
  if (!username.trim()) {
    error += "Username can not be empty!!! \n";
  }
  if (!password.trim()) {
    error += "Password can not be empty!!! \n";
  }
  if (!rePassword.trim()) {
    error += "Rewrite password can not be empty!!! \n";
  }
  return error;
}

export default function Register() {
  let signUp = (event) => {
    // prevent auto submit when sign in
    event.preventDefault();

    // validate the input value
    var error = validate();

    // show loading screen
    const loading = document.querySelector('.loading');
    loading.classList.add('show');

    if (password.trim() && rePassword.trim() && password != rePassword) {
      error += "Rewrite password does not match !!! \n";
    }

    // check username either exist in database or not
    axios.get('https://606b20daf8678400172e5aff.mockapi.io/users/users')
      .then((response) => {
        let userCheck = response.data.find((user) => user.username == username);
        if (userCheck) {
          error += "\n Username is exist!!!";
        }

        if (error) {
          alert(error);
          loading.classList.remove('show');
        } else {
          axios.post('https://606b20daf8678400172e5aff.mockapi.io/users/users', {
            username: username,
            password: password
          })
          .then((response) => {
            alert("Register success");
            window.location.href = "/login";
          })
    
        }
      }).catch((err) => {
        alert(err);
      });

  }

  return (
    <div>
    <div className="wrapper-register">
        <div className="mycontainer">
          <div className="container__right">
            <Link to="/" style={{ width: "110px" }}><h5 className="go-home">Go to Home</h5></Link>
            <h3 className="title">STORY</h3>
            <h5 className="welcome">Create new account</h5>
            <form onSubmit={signUp}>
              <label>Username</label>
              <input id="input-username" type="text" placeholder="Username" onKeyUp={onKeyUp} />
              <label>Password</label>
              <input id="input-password" type="password" placeholder="Password" onKeyUp={onKeyUp} />
              <label>Rewrite Password</label>
              <input id="re-password" type="password" placeholder="Rewrite password" onKeyUp={onKeyUp} />
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
      <div className="loading"><Loading /></div>
    </div>
  );
};