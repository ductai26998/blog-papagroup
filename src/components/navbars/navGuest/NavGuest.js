import React from "react";
import './NavGuest.scss';

class NavGuest extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="nav-guest">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavGuest;