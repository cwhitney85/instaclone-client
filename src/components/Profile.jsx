import React, { Component } from 'react'

const baseURL = 'http://localhost:3003'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: 'Colin',
      avatar: '',
      feeds: []
    }
    this.getUser = this.getUser.bind(this)
  }
  
  componentDidMount() {
    this.getUser()
  }

  getUser() {
    fetch(baseURL + '/users/' + this.state.displayName)
      .then(data => {
        return data.json()
      }).then(parsedData => {
        console.log(parsedData)
        this.setState({
          avatar: parsedData.avatar,
          feeds: parsedData.feeds
        })
      })
  }
  render() {
    return (
      <div>
        <img src={this.state.avatar} />
        <h3>Welcome {this.state.displayName}!</h3>
        <div className="row">
          {this.state.feeds.map((feed, index) => {
            return(
              <div key={index} className="one-third column">
                <img className="profile-img" src={feed} alt=""/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
