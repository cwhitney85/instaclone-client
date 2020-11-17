import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Welcome from './components/Welcome.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <Welcome />
        <h1>InstaClone</h1>
      </div>
    )
  }
}

