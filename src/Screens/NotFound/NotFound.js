import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./NotFound.css"

function NotFound () {
    return (
        <div className="notfound-page">
            <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <div className="notfound-container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;