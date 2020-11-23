import React, { Component, useState, useContext, createContext } from 'react'
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import ErrorNotice from "../ErrorNotice";
import Profile from '../Profile'
// import UserContext from '../../context/UserContext'

const baseURL = 'https://infinite-coast-89197.herokuapp.com'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      displayName: '',
      passwordCheck: '',
      loggedIn: false
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  


  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch(baseURL + '/users/register', {
      method: 'POST',
      body: JSON.stringify({displayName: this.state.displayName, email: this.state.email, password: this.state.password, passwordCheck: this.state.passwordCheck}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        fetch(baseURL + '/users/login', {
          method: 'POST',
          body: JSON.stringify({displayName: this.state.displayName, password: this.state.password}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(data => {
          localStorage.setItem("auth-token", data.token)
          this.setState({
            loggedIn: true
          })
          
          
        })
      })
  }


  render() {
    return (
      
      <div>
        {this.state.loggedIn ? 
        <Redirect to="/profile"/> : null
      } 
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' id='displayName' onChange={this.handleChange} />
            <br/>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' id='email' onChange={this.handleChange} />
            <br/>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' onChange={this.handleChange} />
            <br/>
            <label htmlFor='passwordCheck'>Verify Password: </label>
            <input type="password" name="passwordCheck" id="passwordCheck" onChange={this.handleChange}/>
            <br/>
            
            <input type='submit' value='Submit' />
            
        </form>
      </div>
    )
  }
}
