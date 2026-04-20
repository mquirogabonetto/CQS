import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Screens/Loader/Loader";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class HomeSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            loading: true
        };
    }

    componentDidMount() {
        const apiKey = "b604e547cd3fb7ac5cc35be72e2e0516";
        let type = this.props.type;
        const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    datos: data.results || [],
                    loading: false
                });
            })
            .catch(error => {
                console.log("Error:", error);
                this.setState({ loading: false });
            });

    }

    render() {
        let logueado = cookies.get("auth-user");
        return (
            <div>
                <section className="cardContainer">
                    {this.state.loading ? (
                        <Loader />
                    ) : (
                        this.state.datos.slice(0, 8).map((movie) => (
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
            </div>
        );
    }
}

export default HomeSection;