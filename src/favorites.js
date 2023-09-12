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
        let favorites = window.localStorage.getItem("favorites").split(",");
        this.setState({ favorites });
    }

    render () {
        return (
            <div className="favorite-users-wrapper">
                {this.state.favorites.map((user) => {
                    return(<div className="user" onClick={() => { window.location = `/player/${user}` }}>{user}</div>)
                })}
            </div>
        )
    }
} 