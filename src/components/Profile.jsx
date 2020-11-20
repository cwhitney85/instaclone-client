import React, { Component } from 'react'

import UserContext from '../context/UserContext'


import axios from "axios"

const baseURL = 'http://localhost:3003'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'CWhit',
      feeds:[]
    }
    this.getUser = this.getUser.bind(this)
  }
  
  componentDidMount() {
    // localStorage.getItem()
    const { user, setUser } = this.context
    this.getUser()
  }

  getUser() {
    fetch(baseURL + '/users/5fb6a0aca5116966733f5d4c')
      .then(data => {
        return data.json()
      }).then(parsedData => {
        this.setState({
          avatar: parsedData.avatar,
          feeds: parsedData.feeds
        })
      })
  }

  componentDidMount() {
    this.getFeeds()
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
        <img src={this.state.avatar} />
        <h3>Welcome {this.state.displayName}!</h3>
        <div className="row">
          {this.state.feeds.map((feed, index) => {
            return (
              <div key={index} className="one-third column">
                <a href={'/feeds/' + feed._id}><img className="profile-img" src={feed.image} alt="" /></a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
