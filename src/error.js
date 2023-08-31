import "./css/error.css";

export default function Error () {
    return (
        <div className="error-wrapper">
            <p className="error-404">404!</p>
            <p className="error-text">could not find that page...</p>
        </div>
    )
}