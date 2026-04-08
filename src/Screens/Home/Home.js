import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import SearchForm from "../../Components/SearchForm/SearchForm";
import './Home.css'
import MovieSection from "../../Components/MovieSection/MovieSection";
import HomeSection from "../../Components/HomeSection/HomeSection";

function Home() {
    return (
        <div className="home-page">
            <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <div className="container"><SearchForm /></div>
            <h2>Trending</h2>
            <HomeSection type="tv"/>
            <h2>Popular</h2>
            <HomeSection type="movie"/>
            <Footer />
        </div>
    )
}   

export default Home;
