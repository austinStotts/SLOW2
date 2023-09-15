import React from "react";

import './css/search.css';
import axios from "axios";
import Favorites from "./favorites";

export default class Search extends React.Component {
    constructor () {
        super()

        this.state = {
            playerid: '',
            info: false,
            blur: false,
        }

        this.textChange = this.textChange.bind(this);
        this.searchPlayer = this.searchPlayer.bind(this);
        this.isEnter = this.isEnter.bind(this);
        this.showInfo = this.showInfo.bind(this);
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

    showInfo () {
        this.setState({ info: !this.state.info, blur: !this.state.blur })
    }

    render () {
        return (
            <div className="search-wrapper">
                <dialog className="info-wrapper" open={this.state.info}>
                    <div className="info-item">hello!</div>
                    <div className="info-item">my name is austin stotts (steve)</div>
                    <div className="info-item">this is a personal project for my own use</div>
                    <div className="info-item">if you have any issues / concerns</div>
                    <div className="info-item">send an email to <span className="mail">stevelovescartoons@gmail.com</span></div>
                    <div className="info-item">v1.0.2</div>
                    <div className="close" onClick={this.showInfo}>close</div>
                </dialog>
                <div className="slow" onClick={this.showInfo}><span className="l-s b">S</span>teve<span className="l-l b">L</span>oves<span className="l-ow b">OW</span></div>
                <div className={`search-box-wrapper ${this.state.blur ? "blur" : ""}`}>
                    <div className={`search-box`}>
                        <input onKeyDown={this.isEnter} className="search-input" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="textbox" placeholder="steve#19145" onChange={this.textChange}></input>
                        <button className="search-button" onClick={this.searchPlayer}>search</button>
                    </div>
                    <Favorites/>
                </div>
            </div>
        )
    }
}