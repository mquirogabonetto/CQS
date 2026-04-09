import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import './LogIn.css';
function LogIn () {
    return (
        <div>
             <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <Footer />
        </div>
    )
}

export default LogIn;