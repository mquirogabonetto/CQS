import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import SearchForm from "../../Components/SearchForm/SearchForm";
import HomeSection from "../../Components/HomeSection/HomeSection";
import './Home.css'
import "../../Components/SearchForm/SearchForm.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">
            <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <div className="container"><SearchForm /></div>
            <h2>Popular Movies</h2>
            <HomeSection type="movie"/>
            <Link to="/Peliculas" className="ver-mas">See more movies</Link>

            <h2>Popular Shows</h2>
            <HomeSection type="tv"/>
            <Link to="/Series" className="ver-mas">See more shows</Link>

            <Footer />
        </div>
    )
}   

export default Home;
