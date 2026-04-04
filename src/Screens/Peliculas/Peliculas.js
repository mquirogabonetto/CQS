import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MovieSection from "../../Components/MovieSection/MovieSection";
import './Peliculas.css'

function Peliculas () {
    return (
        <div className="movie-page">
            <Header />
            <MovieSection type="movie"/>
            <Footer />
        </div>
    )
}

export default Peliculas;