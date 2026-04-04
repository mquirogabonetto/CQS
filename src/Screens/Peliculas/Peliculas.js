import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MovieSection from "../../Components/MovieSection/MovieSection";

function Peliculas () {
    return (
        <div>
            <Header />
            <MovieSection type="movie"/>
            <Footer />
        </div>
    )
}

export default Peliculas;