import React, { Component } from 'react'



import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'



import Axios from 'axios'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Welcome from './components/Welcome.jsx'
import Home from './components/Home'
import CreateFeed from './components/CreateFeed'

import Edit from './components/Edit.jsx'


import Register from './components/auth/register'

import Show from './components/Show.jsx'


const baseURL = 'https://infinite-coast-89197.herokuapp.com'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: undefined,
      user: undefined,
      loggedIn: false
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
          fetch(baseURL + '/users/', {
            headers: {
              "x-auth-token": token
            }
          })

          .then(res => res.json())
          .then(parsedData => {
            this.setState({
              token: token,
              user: parsedData,
              loggedIn: true,

              })
            })
        }
      })

  }

  handleSubmit = () => {
    localStorage.clear()
    this.setState({
      loggedIn: false
    })
  }


  render() {

    return (
      <Router>
        <div>
          <Nav user={this.state.user} loggedIn={this.state.loggedIn} handleSubmit={this.handleSubmit}/>
          
            <Switch>
            <div className="container">
              <Route path="/" exact component={Welcome} />
              <Route path="/profile" component={Profile}/>
              <Route path='/edit/:id/edit' component={Edit} />
              <Route path="/feeds/:id" component={Show} />

              <Route path="/home"  component={Home} />



              <Route path="/create" component={CreateFeed}/>
              <Route path="/register" component={Register}/>
            </div>
          </Switch> 
        </div>

      </Router>
    )
  }
}

