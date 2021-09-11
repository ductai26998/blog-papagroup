import React from "react";
import './Header.scss';

import NavGuest from '../navbars/navGuest/NavGuest';
import HotTopic from "../subTitleHotTopic/HotTopic";

class Header extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1 className="logo-text">STORY</h1>
        </div>
        <NavGuest></NavGuest>
        <hr className="header_boundary"></hr>
        <div className="top-topic">
          <div className="top-topic_left">
            <HotTopic></HotTopic>
            <h4 className="hot-topic_title">
              Graduate employability in a changing world
            </h4>
          </div>
          <div className="top-topic_right">
            <div className="newest top-topic_right_item">
              <h7 className="right_item_sub-title">NEWEST</h7>
              <h4 className="right_item_title">
                Graduate employability in a changing world
              </h4>
            </div>
            <div className="top-1 top-topic_right_item">
              <h7 className="right_item_sub-title">TOP 1</h7>
              <h4 className="right_item_title">
                Graduate employability in a changing world
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;