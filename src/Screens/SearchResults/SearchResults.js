import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            cargando: true,
        };
    }
    componentDidMount() {
        let tipo = this.props.match.params.tipo;
        let busqueda = this.props.match.params.busqueda;

        fetch("https://api.themoviedb.org/3/search/" + tipo + "?api_key=b604e547cd3fb7ac5cc35be72e2e0516&query=" + busqueda)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ resultados: data.results, cargando: false });
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
                    <h2 className={"alert " + (tipo === "movie" ? "alert-primary" : "alert-warning")}> {tipo === "movie" ? "Movies" : "Shows"}: {this.props.match.params.busqueda}</h2>
                    {this.state.cargando ? (<p>Loading...</p>) : (
                        <section className="row cards">
                            {this.state.resultados.map((item) => (
                                <article key={item.id} className={"single-card-" + (tipo === "movie" ? "movie" : "tv")}>
                                    <img src={"https://image.tmdb.org/t/p/w342/" + item.poster_path} className="card-img-top" alt={tipo === "movie" ? item.title : item.name} />
                                    <div className="cardBody">
                                        <h5 className="card-title"> {tipo === "movie" ? item.title : item.name}</h5>
                                        <p className="card-text">{item.overview}</p>
                                        <Link to={"/Detalle/" + tipo + "/" + item.id} className={"btn " + (tipo === "movie" ? "btn-primary" : "btn-warning")}> See more </Link>
                                    </div>
                                </article>
                            ))}
                        </section>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default SearchResults;
