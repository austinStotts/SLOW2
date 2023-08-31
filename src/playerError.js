import "./css/playerError.css";

export default function PlayerError () {
    return (
        <div className="player-error-wrapper">
            <p className="error-text-top">Error when fetching player data...</p>
            <p className="error-text-top">this can be caused by a number of reasons</p>
            <ul className="player-error-list">
                <li className="error-text">player id was incorrect</li>
                <li className="error-text">player does not exist</li>
                <li className="error-text">{"overwatch is failing to host their own website (usually the issue)"}</li>
            </ul>
            <p className="error-return" onClick={() => { window.location = "/" }}>return to search?</p>
        </div>
    )
}