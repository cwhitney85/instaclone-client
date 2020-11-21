import React, { Component } from 'react'
import axios from 'axios'
import UserContext from '../context/UserContext'

const baseURL = 'http://localhost:3003'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            // myName: 'Gavin',
            // myPass: '123'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    static contextType = UserContext
    
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const payload = {username: this.state.username, password:this.state.password}
        axios.post(baseURL + '/users/login',payload)
        .then(res => res.json())
        // if(this.state.username === this.state.myName && this.state.password === this.state.myPass) {
        //     document.getElementById('welcome').innerHTML = 'Welcome'
        // } else {
        //     document.getElementById('welcome').innerHTML = 'Not Welcome'
        // }
    }

    render() {
        const { user, setUser } = this.context
        return(
            <div>
                {/* <h1 id='welcome'></h1> */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' id='username' onChange={this.handleChange} />
                    <br/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' onChange={this.handleChange} />
                    <br/>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}