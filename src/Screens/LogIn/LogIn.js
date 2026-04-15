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
            <div className="login-container">
                <div className="login-box">
                    <h2>Log In</h2>
                    <LogInForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LogIn;