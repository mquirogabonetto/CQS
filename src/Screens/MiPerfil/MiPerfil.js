import React from "react";
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import LogOutButton from "../../Components/LogOutButton/LogOutButton";
import Cookies from 'universal-cookie';
import './MiPerfil.css';

const cookies = new Cookies();

function MiPerfil () {
    let email = cookies.get("auth-user");
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let usuario = users.find(u => u.email === email);
    return (
        <div>
             <video autoPlay muted loop className="video-bg">
                <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
            </video>
            <Header />
            <div className="MiPerfil-container">
                <h2>{usuario ? usuario.username : email}, do you want to log out?</h2>
                <div className="">
                    <LogOutButton/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MiPerfil;