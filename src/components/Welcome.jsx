import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import UserContext from '../context/UserContext'

const baseURL = 'http://localhost:3003'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
            // myName: 'Gavin',
            // myPass: '123'
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
        // if(this.state.username === this.state.myName && this.state.password === this.state.myPass) {
        //     document.getElementById('welcome').innerHTML = 'Welcome'
        // } else {
        //     document.getElementById('welcome').innerHTML = 'Not Welcome'
        // }
    }

    render() {
        // const { user, setUser } = this.context
        return(
            <div>
                {this.state.loggedIn ? <Redirect to="/home"/> :
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' id='username' onChange={this.handleChange} />
                    <br/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' onChange={this.handleChange} />
                    <br/>
                    <input type='submit' value='Submit' />
                </form>
    }
            </div>
        )
    }
}