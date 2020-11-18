import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posterName: '',
            url: '',
            likes: 0,
            title: '',
            comments: [],
        }
    }



    render() {
        return(
            <div>
                <h2> {this.state.posterName} </h2>
                <img src={this.state.url}/>
                <h5>Likes: {this.state.likes}</h5>
                <h3>Title: {this.state.title} </h3>
            </div>
        )
    }
}