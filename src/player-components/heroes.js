import "../css/heroes.css";

export default function Heroes ({ heroes, sortByWins }) {

    let hideHero = (h) => {
        let hero = document.getElementById(h);
        if(hero.hidden) { hero.hidden = false }
        else { hero.hidden = true }
    }




    return (
        <div className="heroes-wrapper">
            <center><div className="heroes-input-wrapper" hidden>
                    <button className="sort-button">abc</button>
                    <button className="sort-button" onClick={() => {  }}>win%</button>
                </div></center>
            <center className="c"><div className="heroes-list-wrapper">
                {heroes.map((hero) => {
                    return (
                        <div className="hero-wrapper" key={hero[0]}>
                            <div className="heroes-name-wrapper" onClick={() => { hideHero(hero[0]) } }><span className="heroes-name">{hero[0].toUpperCase()}</span><span className="dropdown-icon">{""}</span></div>
                            <div id={hero[0]} className="hero-details" hidden={true}>
                                <div className="hero-stat-wrapper"><span className="hero-stat-label">winrate</span><span className="hero-stat-value">{hero[1].winrate + "%"}</span></div>
                                <div className="hero-stat-wrapper"><span className="hero-stat-label">time played</span><span className="hero-stat-value">{Math.floor(hero[1].time_played / 3600) + "H"}</span></div>
                                <div className="hero-stat-wrapper"><span className="hero-stat-label">games played</span><span className="hero-stat-value">{hero[1].games_played}</span></div>
                                <div className="hero-stat-wrapper"><span className="hero-stat-label">games won</span><span className="hero-stat-value">{hero[1].games_won}</span></div>
                                <div className="hero-stat-wrapper"><span className="hero-stat-label">kda</span><span className="hero-stat-value">{hero[1].kda}</span></div>
                            </div>
                        </div>
                    )})
                }
            </div></center>
        </div>
    )
}