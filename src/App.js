import React, { Component } from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <h1>InstaClone</h1>
      </div>
    )
  }
}

