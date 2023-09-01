import React from "react";
import { useParams } from "react-router-dom";

import "./css/player.css";
import axios from "axios";
import PlayerError from "./playerError";
import Summary from "./player-components/summary";
import LoadController from "./player-components/loadController";
import PlayerDetails from "./player-components/playerDetails";
import Back from "./back";


class Player extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerid: this.props.params.playerid,
            playerError: false,
            loading: true,
            playerdata: '',
            playerDetailsData: '',
            playerDetailsView: "none",
            lc_hidden: false,
        }

        this.getPlayerSummary = this.getPlayerSummary.bind(this);
        this.getPlayerDetails = this.getPlayerDetails.bind(this);
        this.changeDetailsView = this.changeDetailsView.bind(this);
    }

    componentDidMount () {
        this.getPlayerSummary();
    }

    getPlayerSummary () {
        axios.get(`https://overfast-api.tekrop.fr/players/${this.state.playerid}/summary`)
        .then(data => {this.setState({ playerdata: data.data, loading: false }); console.log(data.data)})
        .catch(error => {this.setState({ playerError: true, loading: false })})
    }

    getPlayerDetails () {
        axios.get(`https://overfast-api.tekrop.fr/players/${this.state.playerid}/stats/summary`)
        .then(data => {this.setState({ playerDetailsData: data.data, lc_hidden: true, playerDetailsView: "heros" }); console.log(data.data)})
        .catch(error => {this.setState({ playerError: true, loading: false })})
    }

    changeDetailsView (view) {
        this.setState({ playerDetailsView: view })
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
                return ( // this is the main view
                    <div className="player-wrapper">
                        <Back />
                        <div className="player-layer-summary-wrapper">
                            <Summary data={this.state.playerdata}/>
                        </div>
                        <div className="player-layer-details-wrapper">
                            <LoadController gpd={this.getPlayerDetails} hidden={this.state.lc_hidden}/>
                            <div className="details-view-switch-wrapper" hidden={!this.state.lc_hidden}>
                                <center>
                                    <button className="details-view-switch-button heros" onClick={() => { this.changeDetailsView('heros') }}>HEROS</button>
                                    <button className="details-view-switch-button roles" onClick={() => { this.changeDetailsView('roles') }}>ROLES</button>
                                </center>
                            </div>
                            <PlayerDetails data={this.state.playerDetailsData} view={this.state.playerDetailsView}/>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default (props) => (<Player {...props} params={useParams()}/>);