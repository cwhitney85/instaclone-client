import React, { Component } from 'react'

const baseURL = 'http://localhost:3003'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'CWhit',
      feeds: ['https://pyxis.nymag.com/v1/imgs/af4/6a5/d412bc022938808feec420fafa25576f98-05-colin-quinn-new.rsquare.w1200.jpg', 'https://media1.s-nbcnews.com/i/newscms/2019_47/3107426/191118-think-colin-kaepernick-se-511p_1eef6007c20658934bf171009f4080e6.jpg', 'https://pyxis.nymag.com/v1/imgs/6ff/b14/200645c468721816453651016c548d4586-23-colin-jost-2.rsquare.w1200.jpg', 'https://irishamerica.com/wp-content/uploads/2019/08/Farrell-in-the-thriller-Phone-Booth..jpg']
    }
  }
  render() {
    return (
      <div>
        <h3>Welcome {this.state.username}!</h3>
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
