import React, { Component } from 'react'
import axios from 'axios'

const baseURL = 'https://infinite-coast-89197.herokuapp.com'


export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        this.getPost()
    }

    getPost() {

        const id = this.props.match.params.id
        axios.get(baseURL + '/feeds/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>

                <h3>Title: {this.state.post.title} </h3>
                <img src={this.state.post.image} />
                <h5>Likes: {this.state.post.likes}</h5>
                <h6>Description: {this.state.post.description} </h6>
                <h6>Tags: {this.state.post.tags} </h6>
                <a href={'/edit/' + this.props.match.params.id + '/edit'}><button>Edit post</button></a>

            </div>
        )
    }
}