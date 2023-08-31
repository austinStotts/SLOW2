import "../css/summary.css";

export default function Summary (props) {
    return (
        <div className="summary-wrapper">
            <img className="summary-namecard" src={props.data.namecard}></img>
            <div className="summary-info-wrapper">
                <div className="summary-spread-wrapper">
                    <img className="summary-avatar" src={props.data.avatar ? props.data.avatar : "https://www.overbuff.com/_next/image?url=%2Fplayers%2Fdefault.png&w=384&q=100"}></img>
                    <div className="summary-text-wrapper">
                        <div className="summary-name ">{props.data.username}</div>
                        <div className="summary-title">{props.data.title}</div>
                    </div>
                    <img className="endrosement-img" src={props.data.endorsement.frame}></img>
                </div>
                <div className="summary-ranks-wrapper">
                    <div className="tank icon-wrapper"><img className="rank-icon" src={props.data.competitive.pc.tank.rank_icon}></img></div>
                    <div className="damage icon-wrapper"><img className="rank-icon" src={props.data.competitive.pc.damage.rank_icon}></img></div>
                    <div className="support icon-wrapper"><img className="rank-icon" src={props.data.competitive.pc.support.rank_icon}></img></div>
                </div>
            </div>
        </div>
    )
}