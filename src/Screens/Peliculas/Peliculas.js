import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MovieSection from "../../Components/MovieSection/MovieSection";
import './Peliculas.css'

function Peliculas () {
    return (
        <div className="movie-page">
            <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <MovieSection type="movie"/>
            <Footer />
        </div>
    )
}

export default Peliculas;