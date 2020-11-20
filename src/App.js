import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Axios from 'axios'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Welcome from './components/Welcome.jsx'
import Home from './components/Home'
import CreateFeed from './components/CreateFeed'

import Register from './components/auth/register'
import UserContext from './context/UserContext'

import Show from './components/Show.jsx'


const baseURL = 'http://localhost:3003'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: undefined,
      user: undefined
    }
  }
  static contextType= UserContext

  componentDidMount() {
    const user = this.context
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
              token: token,
              user: parsedData
            })
          })
        }
      })

  }


  render() {
    
    return (
      <Router>
        <UserContext.Provider>
        <div>
          <Nav/>
          <Switch>
            <div className="container">
              <Route path="/welcome" component={Welcome} />

              <Route path="/profile" component={Profile}/>
              <Route path="/feeds/:id" component={Show} />

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

