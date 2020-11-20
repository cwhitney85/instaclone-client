import React, { Component, useState } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Axios from 'axios'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Welcome from './components/Welcome.jsx'
import Home from './components/Home'
import CreateFeed from './components/CreateFeed'
import Register from './components/auth/register'
import UserContext from './context/UserContext'

const baseURL = 'http://localhost:3003'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: undefined,
      user: undefined
    }
  }

  componentDidMount() {
    this.getUser()
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
        if (data) {
          fetch(baseURL + '/users/' + token)
          .then(res => res.json())
          .then(parsedData => {
            this.setState({
              token: token,
              user: parsedData
            })
          })
        }
      })
    // fetch(baseURL + '/users/' + this.state.user.displayName)
    //   .then(data => {
    //     return data.json()
    //   }).then(parsedData => {
    //     this.setState({
    //       avatar: parsedData.avatar,
    //       feeds: parsedData.feeds
    //     })
    //   })
  }


  render() {
    return (
      <Router>
        <UserContext.Provider value={this.state}>
        <div>
          <Nav/>
          <Switch>
            <div className="container">
              <Route path="/welcome" component={Welcome} />
              <Route path="/profile" user={this.state.user} component={Profile}/>
              <Route path="/" exact component={Home} />
              <Route path="/create" component={CreateFeed}/>
              <Route path="/register" component={Register}/>
            </div>
          </Switch>

        </div>
        </UserContext.Provider>
      </Router>
    )
  }
}

