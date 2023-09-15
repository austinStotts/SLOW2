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
            playerDetailsData: {},
            playerDetailsView: "none",
            lc_hidden: false,
            favorite: false
        }

        this.getPlayerSummary = this.getPlayerSummary.bind(this);
        this.getPlayerDetails = this.getPlayerDetails.bind(this);
        this.changeDetailsView = this.changeDetailsView.bind(this);
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
        this.getFavorites = this.getFavorites.bind(this);
    }

    componentDidMount () {
        this.getPlayerSummary();
        this.getFavorites();
    }

    getPlayerSummary () {
        axios.get(`https://overfast-api.tekrop.fr/players/${this.state.playerid}/summary`)
        .then(data => {
            this.setState({ playerdata: data.data, loading: false }); 
            // console.log(data.data)
        })
        .catch(error => {this.setState({ playerError: true, loading: false })})
    }

    getPlayerDetails () {
        axios.get(`https://overfast-api.tekrop.fr/players/${this.state.playerid}/stats/summary`)
        .then(data => {
            this.setState({ playerDetailsData: data.data, lc_hidden: true, playerDetailsView: "heroes" });
            // console.log(data.data)
        })
        .catch(error => {this.setState({ playerError: true, loading: false })})
    }

    changeDetailsView (view) {
        this.setState({ playerDetailsView: view })
    }

    addFavorite () {
        let favorites = window.localStorage.getItem("favorites");
        if(!favorites) {
            window.localStorage.setItem("favorites", this.state.playerid)
        } else {
            favorites = favorites.split(",");
            if(favorites.length >= 5) {
                favorites.pop();
                favorites.unshift(this.state.playerid);
                window.localStorage.setItem("favorites", favorites.join(","));
            } else {
                favorites.unshift(this.state.playerid);
                window.localStorage.setItem("favorites", favorites.join(","));
            }
        }
        this.setState({ favorite: true });
    }

    removeFavorite () {
        let favorites = window.localStorage.getItem("favorites").split(",");
        for(let i = 0; i < favorites.length; i++) {
            if(favorites[i] == this.state.playerid) { 
                favorites.splice(i, 1);
                window.localStorage.setItem("favorites", favorites.join(","))
                this.setState({ favorite: false })
            }
        }
    }

    getFavorites () {
        let favorites = window.localStorage.getItem("favorites");
        // console.log(favorites);
        if(!favorites) {
            console.log("no favorites...")
        } else {
            favorites = favorites.split(",");
            for(let i = 0; i < favorites.length; i++) {
                if(favorites[i] == this.state.playerid) { this.setState({ favorite: true }) }
            } 
        }
    }

    render () {
        if(this.state.loading) {
            return (<div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
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
                            <Summary data={this.state.playerdata} favorite={this.state.favorite} addFavorite={this.addFavorite} removeFavorite={this.removeFavorite}/>
                        </div>
                        <div className="player-layer-details-wrapper">
                            <LoadController gpd={this.getPlayerDetails} hidden={this.state.lc_hidden}/>
                            <div className="details-view-switch-wrapper" hidden={!this.state.lc_hidden}>
                                <center>
                                    <button className={`details-view-switch-button heros ${this.state.playerDetailsView == "heroes" ? "active-view" : ""}`} onClick={() => { this.changeDetailsView('heroes') }}>HEROES</button>
                                    <button className={`details-view-switch-button roles ${this.state.playerDetailsView == "roles" ? "active-view" : ""}`} onClick={() => { this.changeDetailsView('roles') }}>ROLES</button>
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