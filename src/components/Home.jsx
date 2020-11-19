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
    }

    toggleLove() {
        this.setState({ love: !this.state.love})
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

    likeFeed = (id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                feedId: id
            })
        }).then(res=>res.json())
        .then(result=>{
        //console.log(result)
        const newData = this.state.feeds.map(item=>{
            if(item._id === result._id){
                return result
            }else{
                return item
            }
        })
        this.state.feeds.push(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="home">
                <button onClick={this.redirectToCreate}>Create</button>
                <div className="card home-card">
                <h5>random user</h5>
                <div onClick={ ()=> {this.toggleLove()}} className="card-image">
                    <img className="card-img" src="https://cdn.akc.org/content/hero/border_collie_hero.jpg"/>
                    {this.state.love ? <td>&hearts;</td> : <td></td>}
                </div>
                <div className="card-content">
                    <h6>title</h6>
                    <p>HappyGram</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
                </div>
                <div className="card home-card">
                <h5>random user</h5>
                <div onClick={ ()=> {this.toggleLove()}} className="card-image">
                    <img className="card-img" src="https://images-na.ssl-images-amazon.com/images/I/61fZzciLwHL._AC_SY450_.jpg"/>
                    {this.state.love ? <td>&hearts;</td> : <td></td>}
                </div>
                <div className="card-content">
                    <h6>title</h6>
                    <p>HappyGram</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
                </div>
                <div className="card home-card">
                <h5>random user</h5>
                <div onClick={ ()=> {this.toggleLove()}} className="card-image">
                    <img className="card-img" src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg"/>
                    {this.state.love ? <td>&hearts;</td> : <td></td>}
                </div>
                <div className="card-content">
                    <h6>title</h6>
                    <p>HappyGram</p>
                    <input type="text" placeholder="add a comment"/>
                </div>
              </div>
            </div>
        )
    }
}
