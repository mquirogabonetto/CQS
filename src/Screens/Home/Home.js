import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import SearchForm from "../../Components/SearchForm/SearchForm";
import './Home.css'

function Home() {
    return (
        <div className="home-page">
            <Header />
            <div className="container"><SearchForm /></div>
            <Footer />
        </div>
    )
}

export default Home;
