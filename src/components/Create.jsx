import React, { Component } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3003'

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPost: {}
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post(baseURL + '/feeds/')
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}