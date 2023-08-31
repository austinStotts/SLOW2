import React from "react";
import { useParams } from "react-router-dom";

import "./css/player.css";
import axios from "axios";
import PlayerError from "./playerError";
import Summary from "./player-components/summary";


class Player extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerid: this.props.params.playerid,
            playerError: false,
            loading: true,
            playerdata: ''
        }

        this.getPlayerSummary = this.getPlayerSummary.bind(this);
    }

    componentDidMount () {
        this.getPlayerSummary();
    }

    getPlayerSummary () {
        axios.get(`https://overfast-api.tekrop.fr/players/${this.state.playerid}/summary`)
        .then(data => {this.setState({ playerdata: data.data, loading: false }); console.log(data.data)})
        .catch(error => {this.setState({ playerError: true, loading: false })})
    }

    render () {
        if(this.state.loading) {
            return (<div>loading</div>)
        } else {
            if(this.state.playerError) {
                return (
                    <PlayerError />
                )
            } else {
                return (
                    <div className="player-wrapper">
                        <Summary data={this.state.playerdata}/>
                    </div>
                )
            }
        }
    }
}

export default (props) => (<Player {...props} params={useParams()}/>);