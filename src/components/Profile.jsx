import React, { Component } from 'react'

// import UserContext from '../context/UserContext'

import axios from "axios"
import { Redirect } from 'react-router-dom'

const baseURL = 'http://localhost:3003'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // username: 'CWhit',
      user: {},
      feeds:[]
    }
    this.getUser = this.getUser.bind(this)
  }
  
  // componentDidMount() {
  //   // localStorage.getItem()
  //   const { user, setUser } = this.context
  //   this.getUser()
  // }

  // getUser() {
  //   fetch(baseURL + '/users/5fb6a0aca5116966733f5d4c')
  //     .then(data => {
  //       return data.json()
  //     }).then(parsedData => {
  //       this.setState({
  //         avatar: parsedData.avatar,
  //         feeds: parsedData.feeds
  //       })
  //     })
  // }

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
      //let matchedPosts=[]
      //for(let i=0;i<res.data.length;i++)
      //if(this.state.username===res.data[i].username)
      //matchedPosts.push(res.data[i])
      //else do nothing
        this.setState({
            feeds: res.data
            //feeds: matchedPosts
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
