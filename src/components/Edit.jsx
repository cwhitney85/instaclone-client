import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


const baseURL = 'https://infinite-coast-89197.herokuapp.com'

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
                image: "",
                title: "",
                tags: "",
                displayName: "",
                redirect: false,
                description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.getPost()
        console.log(this.state.post)
    }

    getPost() {

        const id = this.props.match.params.id
        axios.get(baseURL + '/feeds/' + id)
            .then(res => {
                this.setState({
                    description: res.data.description, 
                    image: res.data.image,
                    title: res.data.title,
                    tags: res.data.tags,

                })
            })
            .catch(error => {
                console.log(error)
            })
    }
     
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const id = this.props.match.params.id
        const packageEdit = {
            image: this.state.image,
            title: this.state.title,
            tags: this.state.tags,
            description: this.state.description,
        }
        axios.put(baseURL + '/feeds/' + id , packageEdit)
        .then(this.setState({
            redirect: true
        }))
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={"/profile"}/>
        }
        return(
            <div>
                <h1>Edit post</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span htmlFor="image" className="input-group-text">Image</span>
                    </div>
                    <input onChange={this.handleChange} type="text" className="form-control" name="image" id="image" value={this.state.image}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span htmlFor="title" className="input-group-text">Title</span>
                    </div>
                    <input onChange={this.handleChange} type="text" className="form-control" name="title" id="title" value={this.state.title}/>
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