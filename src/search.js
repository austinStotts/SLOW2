import React from "react";
import './search.css';

export default class Search extends React.Component {
    constructor () {
        super()

        this.state = {
            id_string: ''
        }
    }

    render () {
        return (
            <div className="search-wrapper">
                <div className="search-box">
                    <input className="search-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="textbox" placeholder="steve#19145"></input>
                    <button className="search-button">search</button>
                </div>
            </div>
        )
    }
}