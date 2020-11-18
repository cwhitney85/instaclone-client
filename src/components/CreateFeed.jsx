import React, { Component } from 'react'

export default class CreateFeed extends Component {
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                        <label className="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                    </div>
                    <div className="input-group-append">
                        <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Title</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <br />
                <input class="btn btn-primary" type="submit" value="Submit"></input>
            </div>
        )
    }
}
