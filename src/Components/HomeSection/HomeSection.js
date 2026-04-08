import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class HomeSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],  
        };
    }

    componentDidMount() {
        const apiKey = "b604e547cd3fb7ac5cc35be72e2e0516";
        let type = this.props.type;
        const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("API response:", data);
            this.setState({ datos: data.results || [] });
        })
        .catch(error => console.log("Error:", error));

    }

    render() {
        return (
            <div>
                <section className="cardContainer">
                    {this.state.datos.length === 0 ? (
                        <h3>Loading...</h3>
                    ) : (
                        this.state.datos.slice(0, 8).map((movie) => (
                            <MovieCard
                                key={movie.id}           
                                id={movie.id}
                                title={movie.title || movie.name}
                                poster={movie.poster_path}
                                rating={movie.vote_average}
                                overview={movie.overview}
                            />
                        ))
                    )}
                </section>
            </div>
        );
    }
}

export default HomeSection;