import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="card home-card">
                <h5>random user</h5>
                <div className="card-image">
                    <img className="card-img" src="https://cdn.akc.org/content/hero/border_collie_hero.jpg"/>
                </div>
                <div className="card-content">
                <i class="fas fa-heart"></i>
                    <h6>title</h6>
                    <p>HappyGram</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
                </div>
                <div className="card home-card">
                <h5>random user</h5>
                <div className="card-image">
                    <img className="card-img" src="https://images-na.ssl-images-amazon.com/images/I/61fZzciLwHL._AC_SY450_.jpg"/>
                </div>
                <div className="card-content">
                <i class="fas fa-heart"></i>
                    <h6>title</h6>
                    <p>HappyGram</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
                </div>
                <div className="card home-card">
                <h5>random user</h5>
                <div className="card-image">
                    <img className="card-img" src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg"/>
                </div>
                <div className="card-content">
                <i class="fas fa-heart"></i>
                    <h6>title</h6>
                    <p>HappyGram</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
                </div>
            </div>
        )
    }
}
