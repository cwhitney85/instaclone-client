import React, { Component } from 'react'
import axios from 'axios'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            myName: 'Gavin',
            myPass: '123'
        }
    }
    
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        
    }

    render() {
        return(
            <div>
                <form>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' id='username'/>
                    <br/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' />
                    <br/>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}