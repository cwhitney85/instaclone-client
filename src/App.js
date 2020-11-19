import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Welcome from './components/Welcome.jsx'
import Home from './components/Home'
<<<<<<< HEAD
import Show from './components/Show.jsx'
=======
import CreateFeed from './components/CreateFeed'

>>>>>>> 5ff1e54fb1d16a34bd35809f8ea3a93104a2052c

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
              <Route path="/welcome" component={Welcome} />
              <Route path="/profile" component={Profile}/>
              <Route path="/feeds/:id" component={Show} />
              <Route path="/" exact component={Home} />
              <Route path="/create" component={CreateFeed}/>
            </div>
          </Switch>

        </div>
      </Router>
    )
  }
}

