import React, { Component } from "react";
import "./MovieSection.css";
import MovieCard from "../MovieCard/MovieCard";

class MovieSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            page: 1,
            texto: "",
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
            .then(data => { let nuevasPeliculas = this.state.datos; for (let i = 0; i < data.results.length; i++) { nuevasPeliculas[nuevasPeliculas.length] = data.results[i]; } 
            this.setState({ datos: nuevasPeliculas }); })

            .catch(error => console.log("Error:", error));
    }

    cargarMas = () => {
        this.setState(
            this.setState({ page: this.state.page + 1 }),
            () => this.cargarPeliculas()
        );
    };

    handleChange = (e) => {
        this.setState({
            texto: e.target.value
        });
    };

    render() {
        let logueado = sessionStorage.getItem("usuarioEnSesion") !== null;

        let peliculasFiltradas = this.state.datos.filter(movie =>
            (movie.title || movie.name || "")
                .toLowerCase()
                .includes(this.state.texto.toLowerCase())
        );

        return (
            <div>
                <div className="filtro-contenedor">
                    <input
                        type="text"
                        placeholder="Filtrar..."
                        value={this.state.texto}
                        onChange={this.handleChange}
                        className="filtro"
                    />
                </div>
                <section className="cardContainer">
                    {peliculasFiltradas.length === 0 ? (
                        <h3>No hay resultados</h3>
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

                <button className="boton-cargarmas" onClick={this.cargarMas}>
                    Cargar más
                </button>

            </div>
        );
    }
}

export default MovieSection;