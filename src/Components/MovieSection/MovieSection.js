import React, { Component } from "react";
import "./MovieSection.css";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Screens/Loader/Loader";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class MovieSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            page: 1,
            texto: "",
            loading: true
        };
    }

    componentDidMount() {
        this.cargarPeliculas();
    }
cargarPeliculas() {
    const apiKey = "b604e547cd3fb7ac5cc35be72e2e0516";
    let type = this.props.type;
    const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&page=${this.state.page}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                datos: this.state.datos.concat(data.results),
                loading: false
            });
        })
        .catch(error => {
            console.log("Error:", error);
            this.setState({ loading: false });
        });
}

    cargarMas = () => {
        this.setState(
            { page: this.state.page + 1, loading: true },
            () => this.cargarPeliculas()
        );
    }

    handleChange = (e) => {
        this.setState({
            texto: e.target.value
        });
    }

    render() {
        let logueado = cookies.get("auth-user");
        let peliculasFiltradas = this.state.datos.filter(movie => {
            let titulo = (movie.title || movie.name || "").toLowerCase();
            let texto = this.state.texto.toLowerCase();
            return titulo.includes(texto);
        });

        return (
            <div>
                <div className="filtro-contenedor">
                    <input
                        type="text"
                        placeholder="Filter..."
                        value={this.state.texto}
                        onChange={this.handleChange}
                        className="filtro"
                    />
                </div>

                {this.state.loading ? (
                    <Loader />
                ) : (
                    <section className="cardContainer">
                        {peliculasFiltradas.length === 0 ? (
                            <h3>No results found</h3>
                        ) : (
                            peliculasFiltradas.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    tipo={this.props.type}
                                    title={movie.title || movie.name}
                                    poster={movie.poster_path}
                                    rating={movie.vote_average}
                                    overview={movie.overview}
                                    logueado={logueado}
                                />
                            ))
                        )}
                    </section>
                )}

                <button className="boton-cargarmas" onClick={this.cargarMas}>
                    Load more
                </button>
            </div>
        );
    }
}

export default MovieSection;