import "../css/roles.css";

export default function Roles (props) {
    // console.log(props.data.roles)
    return (
        <div className="roles-wrapper">
            <center><div className="roles-role-wrapper tank">
                <div className="roles-label">TANK</div>
                <div className="roles-win-loss stats"><span className="role-stat-label">winrate</span><span className="role-stat-value">{props.data.roles.tank.winrate + "%"}</span></div>
                <div className="roles-time stats"><span className="role-stat-label">time played</span><span className="role-stat-value">{Math.floor(props.data.roles.tank.time_played / 3600) + " hours"}</span></div>
                <div className="roles-games-played stats"><span className="role-stat-label">games played</span><span className="role-stat-value">{props.data.roles.tank.games_played}</span></div>
                <div className="roles-games-won stats"><span className="role-stat-label">games won</span><span className="role-stat-value">{props.data.roles.tank.games_won}</span></div>
                <div className="roles-kda stats"><span className="role-stat-label">kda</span><span className="role-stat-value">{props.data.roles.tank.kda}</span></div>
            </div></center>
            <center><div className="roles-role-wrapper damage">
                <div className="roles-label">DAMAGE</div>
                <div className="roles-win-loss stats"><span className="role-stat-label">winrate</span><span className="role-stat-value">{props.data.roles.damage.winrate + "%"}</span></div>
                <div className="roles-time stats"><span className="role-stat-label">time played</span><span className="role-stat-value">{Math.floor(props.data.roles.damage.time_played / 3600) + " hours"}</span></div>
                <div className="roles-games-played stats"><span className="role-stat-label">games-played</span><span className="role-stat-value">{props.data.roles.damage.games_played}</span></div>
                <div className="roles-games-won stats"><span className="role-stat-label">games-won</span><span className="role-stat-value">{props.data.roles.damage.games_won}</span></div>
                <div className="roles-kda stats"><span className="role-stat-label">kda</span><span className="role-stat-value">{props.data.roles.damage.kda}</span></div>
            </div></center>
            <center><div className="roles-role-wrapper support">
                <div className="roles-label">SUPPORT</div>
                <div className="roles-win-loss stats"><span className="role-stat-label">winrate</span><span className="role-stat-value">{props.data.roles.support.winrate + "%"}</span></div>
                <div className="roles-time stats"><span className="role-stat-label">time played</span><span className="role-stat-value">{Math.floor(props.data.roles.support.time_played / 3600) + " hours"}</span></div>
                <div className="roles-games-played stats"><span className="role-stat-label">games played</span><span className="role-stat-value">{props.data.roles.support.games_played}</span></div>
                <div className="roles-games-won stats"><span className="role-stat-label">games won</span><span className="role-stat-value">{props.data.roles.support.games_won}</span></div>
                <div className="roles-kda stats"><span className="role-stat-label">kda</span><span className="role-stat-value">{props.data.roles.support.kda}</span></div>
            </div></center>
        </div>
    )
}