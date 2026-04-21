import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

let cookies = new Cookies();

function Header() {
    let isLoggedIn = cookies.get("auth-user");
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/videos/logo.png" alt="logo" />
                    </Link>
                </div>
                <nav>
                    <ul className="Navbar">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Peliculas">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Series">Shows</Link>
                        </li>

                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/Favoritos">Favorites</Link>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/MiPerfil">My Profile</Link>
                            </li>
                        )}

                        {!isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/SignUp">Sign Up</Link>
                            </li>
                        )}

                        {!isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/LogIn">Log In</Link>
                            </li>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
