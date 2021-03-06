import React from "react";
import './Navbar.scss';

import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="nav-guest">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;