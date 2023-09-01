export default function LoadController (props) {
    if(!props.hidden) {
        return (
            <div className="load-controller-wrapper">
                <center><button className="load-button" onClick={props.gpd}>load details</button></center>
            </div>
        )
    } else {
        return (<></>)
    }
}