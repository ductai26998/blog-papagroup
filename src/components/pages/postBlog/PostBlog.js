import axios from "axios";
import React, {useEffect} from "react";
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

import Loading from "../../loading/Loading";
import './PostBlog.scss';

// initial variable to receive the value of input
var title = "";
var content = "";

var currentUser = null;

function validate() {
  // validate the input value
  let error = "";
  if (!title.trim()) {
    error += "Title can not be empty!!!";
  }
  if (!content.trim()) {
    error += "\n Content can not be empty!!!";
  }
  return error;
}

function onKeyUp(event) {
  /* 
    get new value when the value of input changes and
    assign it for the initialized variable in constructor
  */
  let target = event.target.id;
  if (target == 'input-title') {
    title = event.target.value;
  } else {
    content = event.target.value;
  }
}

export default function PostBlog(props) {
  const [cookies, setCookie] = useCookies(['accessToken']);
  let history = useHistory();

  useEffect(() => {
    axios.get('https://606b20daf8678400172e5aff.mockapi.io/users/users/' + cookies.accessToken)
      .then((response) => {
        currentUser = response.data;
      }).catch((err) => {
        alert(err);
      });
  });

  let post = (event) => {
    // prevent auto submit when new blog is not posted
    event.preventDefault();
  
    // validate the input value
    let error = validate();
    if (error) {
      alert(error);
    } else {
      // show loading screen
      const loading = document.querySelector('.loading');
      loading.classList.add('show');
  
      const date = new Date();
      const release = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      const newBlog = {
        title: title,
        content: content,
        author: currentUser.username,
        release: release // release date
      }
  
      // Post new blog to mockapi
      axios.post('https://606b20daf8678400172e5aff.mockapi.io/users/blogs', newBlog)
        .then((response) => {
          // setCookie("posted", true);
          history.push("/blogs");
        }).catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <div>
      <div className="post-container container">
        <div className="post-container__header">
          <div className="page-logo"><span className="logo-text">STORY</span></div>
          <h3 className="post-title">Post to blogs</h3>
        </div>
        <form onSubmit={post} className="post-container__form">
          <div className="blog-title">
            <label>Title: </label>
            <input
              id="input-title"
              className="input-title"
              type="text"
              placeholder="Your blog title"
              onKeyUp={onKeyUp}
            />
          </div>
          <div className="post-option">
            <div className="post-option__content"></div>
          </div>
          <div className="post-box">
            <div className="post-box__text" v-show="inTextInput">
              <textarea
                name=""
                id="input-content"
                className="post-box__text--input"
                cols="30"
                rows="16"
                onKeyUp={onKeyUp}
              ></textarea>
            </div>
            <div className="post-box__send">
              <button type="submit" className="btn-send"></button>
            </div>
          </div>
        </form>
      </div>
      <div className="loading"><Loading /></div>
    </div>
  );
}