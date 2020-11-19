import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class CreateFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            image: "",
            url: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.feedDetails = this.feedDetails.bind(this)
    }

    // componentDidMount() {
    //     this.handleSubmit()
    //     this.feedDetails()
    // }

    // componentDidUpdate() {
    //     this.handleChange()
    // }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        fetch("/create", {
            method: "post",
            body: JSON.stringify({
                title: this.state.title, 
                image: this.state.image,
                url: this.state.url
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            this.props.handleAddFeed(data)
            return (
                <Redirect to="/feeds"/>
            )
        })
    }

    feedDetails() {
        const formData = new FormData()
        formData.append("file", this.state.image)
        formData.append("upload_preset", "instaClone")
        formData.append("cloud_name", "calmworld")
        fetch("https://api.cloudinary.com/v1_1/calmworld/image/upload", {
            method: "post",
            body: formData
        }).then(res => res.json())
        .then(formData => {
            this.state.url(formData.url)
        }).catch(err => {
            console.log(err)
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                            <label className="custom-file-label" for="inputGroupFile01" aria-describedby="inputGroupFileAddon01">Choose file</label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Title</span>
                        </div>
                        <input type="text" onChange={this.handleChange} value={this.state.title} className="form-control"></input>
                    </div>
                    <br />
                    <button onClick={this.feedDetails} className="btn btn-primary" type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}
