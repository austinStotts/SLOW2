import React from "react"

export default class Favorites extends React.Component {
    constructor () {
        super()

        this.state = {
            favorites: []
        }

        this.getFavorites = this.getFavorites.bind(this);
    }

    componentDidMount () {
        this.getFavorites()
    }

    getFavorites () {
        let favorites = window.localStorage.getItem("favorites");
        if(!favorites) {
            favorites = [];
        } else {
            favorites = favorites.split(",");
        }
        this.setState({ favorites });
    }

    render () {
        return (
            <div className="favorite-users-wrapper">
                <div className="favorite-label" hidden={this.state.favorites.length < 1 ? true : false}>favorites:</div>
                {this.state.favorites.map((user) => {
                    return(<div key={user} className="user" onClick={() => { window.location = `/player/${user}` }}>{user.split("-").join(" #")}</div>)
                })}
            </div>
        )
        
    }
} 