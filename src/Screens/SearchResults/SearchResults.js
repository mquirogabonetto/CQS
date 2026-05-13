import React from "react";
import {useState, useEffect} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Loader from "../Loader/Loader";
import './SearchResults.css';
import Cookies from "universal-cookie";


const cookies = new Cookies();

function SearchResults(props) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
       

    useEffect (() => {
        let tipo = props.match.params.tipo;
        let busqueda = props.match.params.busqueda;

        fetch("https://api.themoviedb.org/3/search/" + tipo + "?api_key=b604e547cd3fb7ac5cc35be72e2e0516&query=" + busqueda)
            .then((response) => response.json())
            .then((data) => {
                setResults (data.results || []) 
                setLoading (false) 
            })
            .catch((error) => {
                console.log(error);
                setLoading (false);
            });
    }, []);

        let tipo = props.match.params.tipo;
        let logueado = cookies.get("auth-user");
        return (
            <div>
                <video autoPlay muted loop className="video-bg">
                    <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
                </video>
                <Header />
                <div className="container">
                    {!loading && results.length > 0 && (
                        <h2 className="search-results-title">
                            {tipo === "movie" ? "Movies" : "Shows"}: {props.match.params.busqueda}
                        </h2>
                    )}
                    {loading ? (
                        <Loader />
                    ) : results.length === 0 ? (
                        <p className="no-results">
                            No results for: "{props.match.params.busqueda}"
                        </p>
                    ) : (
                        <section className="cardContainer">
                            {results.map((item) => (
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

export default SearchResults;