import React, { Component } from 'react'


const baseURL = "http://localhost:3003"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            love: false,
            feeds: []
        }
        this.toggleLove = this.toggleLove.bind(this)
        this.handleAddFeed = this.handleAddFeed.bind(this)
        this.deleteFeed = this.deleteFeed.bind(this)
    }

    toggleLove() {
        this.setState({ love: !this.state.love })
    }

    redirectToCreate = () => {
        const { history } = this.props
        if (history) history.push('/create')
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

    likeFeed = (id) => {
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                feedId: id
            })
        }).then(res => res.json())
            .then(result => {
                //console.log(result)
                const newData = this.state.feeds.map(item => {
                    if (item._id === result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                this.state.feeds.push(newData)
            }).catch(err => {
                console.log(err)
            })
    }

    deleteFeed(id) {
        fetch(baseURL + '/feeds/' + id, {
            method: 'DELETE'
        }).then(response => {
            const findIndex = this.state.feeds.findIndex(feed => feed._id === id)
            const copyFeeds = [...this.state.feeds]
            copyFeeds.splice(findIndex, 1)
            this.setState({feeds: copyFeeds})
        })
    }

    render() {
        return (
            <div className="home">
                <div className="create"><button className="btn btn-success" onClick={this.redirectToCreate}>Create</button></div>
                {this.state.feeds.map(feed => {
                    return (
                        <div className="card home-card">
                            <h5>{feed.username}</h5>
                            <div onClick={() => { this.toggleLove() }} className="card-image">
                                <img className="card-img" src={feed.image} />
                                {this.state.love ? <td>&hearts;</td> : <td></td>}
                            </div>
                            <div className="card-content">
                                <h6>{feed.title}</h6>
                                <p>{feed.description}</p>
                                <p>{feed.tags}</p>
                                <h6 className="delete" onClick={()=>this.deleteFeed(feed._id)}><i class="fas fa-trash"></i></h6>
                            </div>
                        </div>
                    )
                })}               
            </div>
        )
    }
}
