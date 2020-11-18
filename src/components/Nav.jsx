import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <h3 className="navbar-brand">InstaClone</h3>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav flex-row ml-auto d-flex">
            <li className="nav-item nav-link">Sign up</li>
            <li className="nav-item nav-link">Log In</li>
          </ul>
        </div>
      </nav>
    )
  }
}
