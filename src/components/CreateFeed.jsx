import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default class CreateFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            selectedFile: null,
            fileName: "",
            loaded: 0
        }
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeUpload = this.onChangeUpload.bind(this)
        this.onClickUpload = this.onClickUpload.bind(this)
    }

    onChangeTitle(event) {
        this.setState({ 
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        fetch("/create", {
            method: "post",
            body: JSON.stringify({
                title: this.state.title, 
                selectedFile: this.state.selectedFile,
                fileName: this.state.fileName
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

    onChangeUpload(event) {
        console.log(event.target.files[0])
            this.setState({ 
                selectedFile: event.target.files[0],
                fileName: event.target.files[0].name,
                loaded: 0
            })
    }

    onClickUpload = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:3003/upload", data, { // receive two parameter endpoint url ,form data 
        }).then(res => { // then print response status
        console.log(res.statusText)
        toast.success('upload success')
        }).catch(err => {
            toast.error('upload file')
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" name="file" value="" onChange={this.onChangeUpload}className="custom-file-input" id="inputGroupFile01"/>
                            <label className="custom-file-label" htmlFor="file" name="file" aria-describedby="inputGroupFileAddon01">Choose file</label>
                        </div>
                        <div className="input-group-append">
                            <span onClick={this.onClickUpload} className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div className="form-group">
                        <ToastContainer />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Title</span>
                        </div>
                        <input type="text" onChange={this.onChangeTitle} value={this.state.title} className="form-control"></input>
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

