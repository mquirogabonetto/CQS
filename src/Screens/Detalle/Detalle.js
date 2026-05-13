import React from "react";
import {useState, useEffect} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Loader from "../Loader/Loader";
import './Detalle.css';
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Detalle (props) {
 const [detalle, setDetalle] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [esFavorito, setEsFavorito] = useState(false);

    useEffect (() => {
        let tipo = props.match.params.tipo;
        let id = props.match.params.id;

        fetch("https://api.themoviedb.org/3/" + tipo + "/" + id + "?api_key=b604e547cd3fb7ac5cc35be72e2e0516")
            .then((response) => response.json())
            .then((data) => {
                let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
                let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];
                let filtrados = favoritos.filter(f => f.id === data.id);
                let existe = filtrados.length > 0;
                setDetalle (data);
                setCargando (false);
                setEsFavorito (existe);
            })
            .catch((error) => {
                console.log(error);
                setCargando (false);
            });
    }, []); 
    function manejarFavorito() {
        let tipo = props.match.params.tipo;
        let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";

        let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];

        let filtrados = favoritos.filter(f => f.id === detalle.id);
        let existe = filtrados.length > 0;

        if (existe) {
            favoritos = favoritos.filter(f => f.id !== detalle.id);
            setEsFavorito (false);
        } else {
            favoritos.push({
                id: detalle.id,
                title: detalle.title || detalle.name,
                poster: detalle.poster_path,
                overview: detalle.overview
            });
            setEsFavorito (true);
        }

        localStorage.setItem(storageKey, JSON.stringify(favoritos));
    }

        let logueado = cookies.get("auth-user");
        let tipo = props.match.params.tipo;
        return (
            <div className="detalle-page">
                <video autoPlay muted loop className="video-bg">
                    <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
                </video>
                <Header />
                <div className="container">
                    <h2 className={"alert " + (tipo === "movie" ? "alert-primary" : "alert-warning")}>{tipo === "movie" ? "Movie" : "Show"}</h2>
                    {cargando ? (<Loader />) : (
                        <section className="row">
                            <div className="col-md-6 detalle-poster">
                                <img src={"https://image.tmdb.org/t/p/w342/" + detalle.poster_path} className="col-md-6" alt={tipo === "movie" ? detalle.title : detalle.name} />
                                {logueado && (
                                    esFavorito ? (
                                        <button className="btn-favorites" onClick={() => manejarFavorito()}>
                                            Remove ❌
                                        </button>
                                    ) : (
                                        <button className="btn-favorites" onClick={() => manejarFavorito()}>
                                            Add to favorites ⭐
                                        </button>
                                    )
                                )}
                            </div>
                            <div className="col-md-6 detalle-info">
                                <h3>{tipo === "movie" ? detalle.title :detalle.name}</h3>
                                <p><strong>Synopsis:</strong> {detalle.overview}</p>
                                <p><strong>Rating:</strong> {detalle.vote_average}</p>
                                <p><strong>Release date:</strong> {tipo === "movie" ? detalle.release_date : detalle.first_air_date}</p>
                                {tipo === "movie" ? (<p><strong>Runtime:</strong> {detalle.runtime} min</p>) : ("")}
                                <p><strong>Genre:</strong> {detalle.genres && detalle.genres.length > 0 ? detalle.genres[0].name : "Unknown"}</p>
                            </div>
                        </section>
                    )}
                </div>
                <Footer />
            </div>
        );
    }

export default Detalle;