import React, { Component } from 'react'

import axios from "axios"
import { Redirect } from 'react-router-dom'

const baseURL = 'https://infinite-coast-89197.herokuapp.com'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      feeds:[]
    }
    this.getUser = this.getUser.bind(this)
  }
  

  componentDidMount() {
    this.getFeeds()
    this.getUser()
  }

  getUser = () => {
    let token = localStorage.getItem("auth-token")
    if (token === null) {
      localStorage.setItem("auth-token", "")
      token = ""
    }
    fetch(baseURL + '/users/VerifyToken', {
      method: 'POST',
      headers: {
        "x-auth-token": token
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          fetch(baseURL + '/users/', {
            headers: {
              "x-auth-token": token
            }
          })
          .then(res => res.json())
          .then(parsedData => {
            this.setState({
              token: token,
              user: parsedData.user
            })
          })
        }
      })
  }

  getFeeds() {
    axios.get(baseURL + '/feeds')
    .then(res => {
        this.setState({
            feeds: res.data
        })
    })
    .catch(error => {
        console.log(error)
    })
  }



  render() {
    return (
      <div>
        {this.state.user ? 
        <>
        <img src={this.state.user.avatar} />
        <h3>Welcome {this.state.user.displayName}!</h3>
        <div className="row">
          {this.state.feeds.map((feed, index) => {
            return (
              <div key={index} className="one-third column">
                <a href={'/feeds/' + feed._id}><img className="profile-img" src={feed.image} alt="" /></a>
              </div>
            )
          })}
        </div>
        </> : <Redirect to="/"/>}
      </div>
    )
  }
}
