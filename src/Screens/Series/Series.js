import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import MovieSection from "../../Components/MovieSection/MovieSection";

function Series () {
    return (
        <div>
            <Header />
            <MovieSection type="tv"/>
            <Footer />
        </div>
    )
}

export default Series;