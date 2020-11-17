import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Profile from './components/Profile'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav/>
          <h1>InstaClone</h1>
          <Route path="/profile" component={Profile}/>
        </div>
      </Router>
      
    )
  }
}

