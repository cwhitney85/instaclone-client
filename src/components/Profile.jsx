import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h3>Welcome Username!</h3>
        <div className="row">
          <div className="one-third column">
            <img className="profile-img" src="https://pyxis.nymag.com/v1/imgs/af4/6a5/d412bc022938808feec420fafa25576f98-05-colin-quinn-new.rsquare.w1200.jpg" alt="quinn"/>
          </div>
          <div className="one-third column">
            <img className="profile-img" src="https://media1.s-nbcnews.com/i/newscms/2019_47/3107426/191118-think-colin-kaepernick-se-511p_1eef6007c20658934bf171009f4080e6.jpg" alt="kap"/>
          </div>
          <div className="one-third column">
            <img className="profile-img" src="https://pyxis.nymag.com/v1/imgs/6ff/b14/200645c468721816453651016c548d4586-23-colin-jost-2.rsquare.w1200.jpg" alt="jost"/>
          </div>
          <div className="one-third column">
            <img className="profile-img" src="https://pyxis.nymag.com/v1/imgs/6ff/b14/200645c468721816453651016c548d4586-23-colin-jost-2.rsquare.w1200.jpg" alt="jost"/>
          </div>        
        </div>
      </div>
    )
  }
}
