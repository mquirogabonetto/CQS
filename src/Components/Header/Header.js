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
                <ul class="Navbar">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Peliculas">Movies</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Series">Shows</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Favoritos">Favorites</Link>
                    </li>
                    <li class="nav-item ml-auto">
                        <Link class="nav-link" to="/SignUp">Sign Up</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="LogIn">Log In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
