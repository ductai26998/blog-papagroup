import "./Loading.scss"

export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loading-icon">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
}