import React from "react";
import {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Cookies from "universal-cookie";
import "./Favoritos.css";

const cookies = new Cookies();

function Favoritos (props) {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect (() => {
        const estaLogueado = cookies.get("auth-user");
        if (!estaLogueado) {
            props.history.push("/login");
            return;
        }

        const favMovies = JSON.parse(localStorage.getItem("favoritosMovies")) || [];
        const favSeries = JSON.parse(localStorage.getItem("favoritosSeries")) || [];

        setMovies (favMovies);
        setSeries (favSeries);
    }, []);

    function eliminarFavorito (id, tipo) {
        const storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
        const lista = tipo === "movie" ? movies : series;

        const filtrados = lista.filter(item => item.id !== id);
        localStorage.setItem(storageKey, JSON.stringify(filtrados));

        if (tipo === "movie") {
            setMovies (filtrados);
        } else {
            setSeries (filtrados);
        }
    }
        return (
            <div>
                <video autoPlay muted loop className="video-bg">
                    <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
                </video>

                <Header />

                <div className="container">
                    <h2>Favorite Movies</h2>

                    {movies.length === 0 ? (
                        <p className="empty">No favorite movies yet.</p>
                    ) : (
                        <div className="cardContainer">
                            {movies.map((item) => (
                                <MovieCard
                                    key={item.id}
                                    id={item.id}
                                    tipo="movie"
                                    title={item.title}
                                    poster={item.poster}
                                    overview={item.overview}
                                    logueado={true}
                                    onRemove={eliminarFavorito}
                                />
                            ))}
                        </div>
                    )}

                    <h2>Favorite Shows</h2>

                    {series.length === 0 ? (
                        <p className="empty">No favorite shows yet.</p>
                    ) : (
                        <div className="cardContainer">
                            {series.map((item) => (
                                <MovieCard
                                    key={item.id}
                                    id={item.id}
                                    tipo="tv"
                                    title={item.title}
                                    poster={item.poster}
                                    overview={item.overview}
                                    logueado={true}
                                    onRemove={eliminarFavorito}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <Footer />
            </div>
        );
    }

export default withRouter(Favoritos);