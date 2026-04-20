import React from "react";
import "./Loader.css";

function Loader() {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
            <p className="load">Loading...</p>
        </div>
    );
}

export default Loader;

