import Axios from 'axios'
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'


export default class CreateFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            description: "",
            tags: "",
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const packageUpload = {
            image: this.state.image,
            description: this.state.description,
            tags: this.state.tags
        }
        Axios.post('http://localhost:3003/feeds', packageUpload)
        .then(this.setState({
            redirect: true
        }))
    }

    
    render() {
        if(this.state.redirect) {
            return <Redirect to={"/"}/>
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="form-label">Image</label>
                    <input className="form-input" onChange={this.handleChange} type="text" name="image" id="image" value={this.state.image}/>
                    <label className="form-label">Description</label>
                    <input className="form-input" onChange={this.handleChange} type="text" name="description" id="description" value={this.state.description}/>
                    <label className="form-label">Tags</label>
                    <input className="form-input" onChange={this.handleChange} type="text" name="tags" id="tags" value={this.state.tags}/>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        )
    }
}

