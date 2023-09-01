import Heros from "./heros";
import Roles from "./roles";


export default function PlayerDetails (props) {
    if(props.view == "heros") {
        return (<Heros />)
    } else if(props.view == "roles") {
        return (<Roles />)
    } else {
        return (<div className="no-details"></div>)
    }
}