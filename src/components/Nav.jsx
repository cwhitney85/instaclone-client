import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <h3 className="navbar-brand">InstaClone</h3>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav flex-row ml-auto d-flex">
            <Link to="/welcome">
              <li className="nav-item nav-link">Sign up</li>
            </Link>
            <Link to="/welcome">
              <li className="nav-item nav-link">Log In</li>
            </Link>
            <Link to="/profile">
              <li className="nav-item nav-link">Profile</li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}
