import React from "react";

import './css/search.css';
import axios from "axios";

export default class Search extends React.Component {
    constructor () {
        super()

        this.state = {
            playerid: ''
        }

        this.textChange = this.textChange.bind(this);
        this.searchPlayer = this.searchPlayer.bind(this);
        this.isEnter = this.isEnter.bind(this);
    }

    isEnter (event) {
        if(event.key == "Enter") { this.searchPlayer() }
    }

    textChange (event) {
        const cleanText = (string) => {
            return string.split("#").join("-");
        }
        this.setState({ playerid: cleanText(event.target.value) })
    }

    searchPlayer () {
        window.location = `/player/${this.state.playerid}`
    }

    render () {
        return (
            <div className="search-wrapper">
                <div className="search-box">
                    <input onKeyDown={this.isEnter} className="search-input" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="textbox" placeholder="steve#19145" onChange={this.textChange}></input>
                    <button className="search-button" onClick={this.searchPlayer}>search</button>
                </div>
            </div>
        )
    }
}