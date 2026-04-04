import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";


function Header () {
    return(
        <header>
            <div>
                img
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
                    <li className="nav-item">
                        <Link className="nav-link" to="/Favoritos">Favorites</Link>
                    </li>
                    <li className="nav-item ml-auto">
                        <Link className="nav-link" to="/SignUp">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="LogIn">Log In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
