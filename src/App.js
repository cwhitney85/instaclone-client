import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Welcome from './components/Welcome.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <div className="container">
              <Route path="/" exact component={Welcome} />
              <Route path="/profile" component={Profile}/>
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

