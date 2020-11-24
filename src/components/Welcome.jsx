import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'


const baseURL = 'https://infinite-coast-89197.herokuapp.com'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
                  loggedIn: true
                
                })
              })
            }
          })
      }
    
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const payload = {displayName: this.state.username, password:this.state.password}
        axios.post(baseURL + '/users/login',payload)
        .then(response => {
            localStorage.setItem("auth-token", response.data.token)
            this.setState({
                loggedIn: true,

            })
            console.log(response)
        })
    }

    render() {
        return(
            <div>
                {this.state.loggedIn ? <Redirect to="/home"/> :
                <div>
                  <form onSubmit={this.handleSubmit}>
                      <label htmlFor='username'>Username: </label>
                      <input type='text' name='username' id='username' onChange={this.handleChange} />
                      <br/>
                      <label htmlFor='password'>Password: </label>
                      <input type='password' name='password' id='password' onChange={this.handleChange} />
                      <br/>
                      <input type='submit' value='Submit' />
                  </form> <br/>
                  <Link to="/register">
                    <h5>Don't have an account? Sign up!</h5>
                  </Link>
                </div>
            }
            </div>
        )
    }
}