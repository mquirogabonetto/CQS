import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import SearchForm from "../../Components/SearchForm/SearchForm";

function Home () {
    return (
       <div>
            <Header />
            <div className="container"><SearchForm/></div>
            <Footer />
        </div>
    )
}

export default Home;
