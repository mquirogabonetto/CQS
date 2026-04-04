import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: null,
            cargando: true,
        };
    }
    componentDidMount() {
        let tipo = this.props.match.params.tipo;
        let id = this.props.match.params.id;

        fetch("https://api.themoviedb.org/3/" + tipo + "/" + id + "?api_key=b604e547cd3fb7ac5cc35be72e2e0516")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ detalle: data, cargando: false });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let tipo = this.props.match.params.tipo;
        return (
            <div>
                <Header />
                <div className="container">
                    <h2 className={"alert " + (tipo === "movie" ? "alert-primary" : "alert-warning")}>{tipo === "movie" ? "Movie" : "Show"}</h2>
                    {this.state.cargando ? (<p>Loading...</p>) : (
                        <section className="row">
                            <img src={"https://image.tmdb.org/t/p/w342/" + this.state.detalle.poster_path} className="col-md-6" alt={tipo === "movie" ? this.state.detalle.title : this.state.detalle.name} />
                            <div className="col-md-6">
                                <h3>{tipo === "movie" ? this.state.detalle.title : this.state.detalle.name}</h3>
                                <p><strong>Synopsis:</strong> {this.state.detalle.overview}</p>
                                <p><strong>Rating:</strong> {this.state.detalle.vote_average}</p>
                                <p><strong>Release date:</strong> {tipo === "movie" ? this.state.detalle.release_date : this.state.detalle.first_air_date}</p>
                                {tipo === "movie" ? (<p><strong>Runtime:</strong> {this.state.detalle.runtime} min</p>) : ("")}
                                <p><strong>Genre:</strong> {this.state.detalle.genres.length > 0 ? this.state.detalle.genres[0].name : "Unknown"}</p>
                            </div>
                        </section>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Detalle;