import Heroes from "./heroes";
import Roles from "./roles";


export default function PlayerDetails (props) {

    // console.log(props)
    let heroes = [];
    if(props.data.heroes) {
        
        Object.entries(props.data.heroes).map((hero) => { heroes.push(hero) });
    }


    if(props.view == "heroes") {
        return (<Heroes heroes={heroes}/>)
    } else if(props.view == "roles") {
        return (<Roles data={props.data}/>)
    } else {
        return (<div className="no-details"></div>)
    }
}