import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Loader from "../Loader/Loader";
import './SearchResults.css';
import Cookies from "universal-cookie";


const cookies = new Cookies();

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            loading: true,
        };
    }

    componentDidMount() {
        let tipo = this.props.match.params.tipo;
        let busqueda = this.props.match.params.busqueda;

        fetch("https://api.themoviedb.org/3/search/" + tipo + "?api_key=b604e547cd3fb7ac5cc35be72e2e0516&query=" + busqueda)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ results: data.results || [], loading: false });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        let tipo = this.props.match.params.tipo;
        let logueado = cookies.get("auth-user");
        return (
            <div>
                <video autoPlay muted loop className="video-bg">
                    <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
                </video>
                <Header />
                <div className="container">
                    {!this.state.loading && this.state.results.length > 0 && (
                        <h2 className="search-results-title">
                            {tipo === "movie" ? "Movies" : "Shows"}: {this.props.match.params.busqueda}
                        </h2>
                    )}
                    {this.state.loading ? (
                        <Loader />
                    ) : this.state.results.length === 0 ? (
                        <p className="no-results">
                            No results for: "{this.props.match.params.busqueda}"
                        </p>
                    ) : (
                        <section className="cardContainer">
                            {this.state.results.map((item) => (
                                <MovieCard
                                    key={item.id}
                                    id={item.id}
                                    tipo={tipo}
                                    title={item.title || item.name}
                                    poster={item.poster_path}
                                    overview={item.overview}
                                    logueado={logueado}
                                />
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