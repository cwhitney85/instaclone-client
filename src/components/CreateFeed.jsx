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
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span htmlFor="image" className="input-group-text">Image</span>
                    </div>
                    <input onChange={this.handleChange} type="text" className="form-control" name="image" id="image" value={this.state.image}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span htmlFor="description" className="input-group-text">Description</span>
                    </div>
                    <input onChange={this.handleChange} type="text" className="form-control" name="description" id="description" value={this.state.description}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span htmlFor="tags" className="input-group-text">Tags</span>
                    </div>
                    <input onChange={this.handleChange} type="text" className="form-control" name="tags" id="tags" value={this.state.tags}/>
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

