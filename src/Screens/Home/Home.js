import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import SearchForm from "../../Components/SearchForm/SearchForm";
import HomeSection from "../../Components/HomeSection/HomeSection";
import './Home.css'
import "../../Components/SearchForm/SearchForm.css";

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
            <h2>Popular Shows</h2>
            <HomeSection type="tv"/>
            <Footer />
        </div>
    )
}   

export default Home;
