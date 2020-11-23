import React, { useContext, Component } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../context/UserContext'

const baseURL = 'http://localhost:3003'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   loggedIn: false,
    //   user: {}
    // }
  }
  
 

  getUser = () => {
    let token = localStorage.getItem("auth-token")
    if (token === null) {
      localStorage.setItem("auth-token", "")
      token = ""
    }
    fetch(baseURL + '/users/VerifyToken', {
      method: 'POST',
      headers: {
        "x-auth-token": token
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          fetch(baseURL + '/users/', {
            headers: {
              "x-auth-token": token
            }
          })
          .then(res => res.json())
          .then(parsedData => {
            this.setState({
              loggedIn: true,
              user: parsedData.user
            })
          })
        }
      })
  }

  // handleSubmit = () => {
  //   localStorage.clear()
  //   // this.setState({
  //   //   loggedIn: false
  //   // })
  // }

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <h3 className="navbar-brand">InstaClone</h3>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav flex-row ml-auto d-flex">
            {this.props.loggedIn ? 
            <>
            <li className="nav-item nav-link disabled">Hi {this.props.user.user.displayName}</li>
            <Link to="/profile">
              <li className="nav-item nav-link">Profile</li>
            </Link>
            <Link to="/create">
              <li className="nav-item nav-link">Create</li>
            </Link>
            <form class="form-inline" onSubmit={this.props.handleSubmit}>
              <button class="btn btn-sm btn-primary" type="submit">Log Out</button>
            </form>
            </> :
            <>
            <Link to="/register">
              <li className="nav-item nav-link">Register</li>
            </Link>
            <Link to="/">
              <li className="nav-item nav-link">Log In</li>
            </Link>
            </>}
          </ul>
        </div>
      </nav>
    )
  }
}
