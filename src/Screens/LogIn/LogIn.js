import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import LogInForm from "../../Components/LogInForm/LogInForm";
import './LogIn.css';
function LogIn () {
    return (
        <div>
             <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <LogInForm/>
            <Footer />
        </div>
    )
}

export default LogIn;