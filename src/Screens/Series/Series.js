import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MovieSection from "../../Components/MovieSection/MovieSection";

function Series () {
    return (
        <div>
            <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <MovieSection type="tv"/>
            <Footer />
        </div>
    )
}

export default Series;