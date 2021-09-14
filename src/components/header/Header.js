import React from "react";
import './Header.scss';

import NavGuest from '../navbars/navGuest/NavGuest';
import HotTopic from "../subTitleHotTopic/HotTopic";
import LoginBtn from "../buttons/loginBtn/LoginBtn";
import RegisterBtn from "../buttons/registerBtn/RegisterBtn";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {blogs, popular, lastNewBlogs} = this.props.data;

    return (
      <div className="header">
        <div className="logo">
          <h1 className="logo-text">STORY</h1>
        </div>
        <div className className="header-nav">
          <NavGuest></NavGuest>
          <div className="header-nav_btn">
            <LoginBtn></LoginBtn>
            <RegisterBtn></RegisterBtn>
          </div>
        </div>
        <hr className="header_boundary"></hr>
        <div className="top-topic">
          <div className="top-topic_left">
            <HotTopic></HotTopic>
            <h4 className="hot-topic_title">
              {popular[0] ? popular[0].title : ''}
            </h4>
          </div>
          <div className="top-topic_right">
            <div className="newest top-topic_right_item">
              <h6 className="right_item_sub-title">NEWEST</h6>
              <h4 className="right_item_title">
                {lastNewBlogs[0] ? lastNewBlogs[0].title : ''}
              </h4>
            </div>
            <div className="top-1 top-topic_right_item">
              <h6 className="right_item_sub-title">TOP ONE</h6>
              <h4 className="right_item_title">
                {popular[0] ? popular[0].title : ''}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;