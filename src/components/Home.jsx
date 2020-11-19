import React, { Component } from 'react'


const baseURL = "http://localhost:3003"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feeds: []
        }
        this.handleAddFeed = this.handleAddFeed.bind(this)
    }

    redirectToCreate = () => {
        const {history} = this.props
        if(history) history.push('/create')
    }

    componentDidMount() {
        this.getFeeds()
      }
    
      handleAddFeed(feed) {
        this.setState({
          feeds: this.state.feeds.concat(feed)
        })
      }
    
      getFeeds() {
        fetch(baseURL + '/feeds')
        .then(data => {
          return data.json()
        }).then(parsedData => {
          this.setState({
            feeds: parsedData
          })
        })
      }

    render() {
        return (
            <div className="home">
                <button onClick={this.redirectToCreate}>Create</button>
                <div className="card home-card">
                    <h5>random user</h5>
                    <div className="card-image">
                        <img className="card-img" src="https://cdn.akc.org/content/hero/border_collie_hero.jpg" alt="img"/>
                    </div>
                    <div className="card-content">
                    <i className="fas fa-heart"></i>
                        <h6>title</h6>
                        <p>HappyGram</p>
                        <input type="text" placeholder="add a comment"/>
                    </div>
                    </div>
                    <div className="card home-card">
                    <h5>random user</h5>
                    <div className="card-image">
                        <img className="card-img" src="https://images-na.ssl-images-amazon.com/images/I/61fZzciLwHL._AC_SY450_.jpg" alt="img"/>
                    </div>
                    <div className="card-content">
                    <i className="fas fa-heart"></i>
                        <h6>title</h6>
                        <p>HappyGram</p>
                        <input type="text" placeholder="add a comment"/>
                    </div>
                    </div>
                    <div className="card home-card">
                    <h5>random user</h5>
                    <div className="card-image">
                        <img className="card-img" src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg" alt="img"/>
                    </div>
                    <div className="card-content">
                    <i className="fas fa-heart"></i>
                        <h6>title</h6>
                        <p>HappyGram</p>
                        <input type="text" placeholder="add a comment"/>
                    </div>
                </div>
            </div>
        )
    }
}
