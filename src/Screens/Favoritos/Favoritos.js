import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Favoritos.css"

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            series: [],
            logueado: false
        };
    }

    componentDidMount() {
        let favMovies = JSON.parse(localStorage.getItem("favoritosMovies")) || [];
        let favSeries = JSON.parse(localStorage.getItem("favoritosSeries")) || [];

        this.setState({
            movies: favMovies,
            series: favSeries
        });
    }

    eliminarFavorito(id, tipo){
        let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
        let lista = tipo === "movie" ? this.state.movies : this.state.series;
        let filtrados = lista.filter(item => item.id !== id);
        localStorage.setItem(storageKey, JSON.stringify(filtrados));

        if (tipo === "movie") {
            this.setState({movies: filtrados});
        } else {
            this.setState({series: filtrados});
        }
    }

    render() {
        return (
            <div>
                <video autoPlay muted loop className="video-bg">
                    <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
                </video>

                <Header />

                <div className="container">

                    {/* NO LOGUEADO */}
                    {!this.state.logueado ? (
                        <h2 className="nofavoritos">No tenés favoritos. Iniciá sesión.</h2>
                    ) : (
                        <>
                            {/* MOVIES */}
                            <h2>Favorite Movies</h2>

                            {this.state.movies.length === 0 ? (
                                <p>No favorite movies yet</p>
                            ) : (
                                <div className="cardContainer">
                                    {this.state.movies.map(item => (
                                        <MovieCard
                                            key={item.id}
                                            {...item}
                                            tipo="movie"
                                            onRemove={(id, tipo) => this.eliminarFavorito(id, tipo)}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* SERIES */}
                            <h2>Favorite Shows</h2>

                            {this.state.series.length === 0 ? (
                                <p>No favorite shows yet</p>
                            ) : (
                                <div className="cardContainer">
                                    {this.state.series.map(item => (
                                        <MovieCard
                                            key={item.id}
                                            {...item}
                                            tipo="tv"
                                            onRemove={(id, tipo) => this.eliminarFavorito(id, tipo)}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Favoritos;