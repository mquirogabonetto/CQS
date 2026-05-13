import React from "react";
import { useState, useEffect } from "react";
import "./MovieSection.css";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Screens/Loader/Loader";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function MovieSection(props) {
    
    const [datos, setDatos] = useState([]);        
    const [page, setPage] = useState(1);           
    const [texto, setTexto] = useState("");       
    const [loading, setLoading] = useState(true);


    useEffect( () => {
        const apiKey = "b604e547cd3fb7ac5cc35be72e2e0516";
        let type = props.type;

        const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&page=${page}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDatos( estadoAnterior => {
                    if (page === 1) return data.results; 
                    const combinados = estadoAnterior.concat(data.results);
                    const ids = [];
                    return combinados.filter(movie => {
                        if (!ids.includes(movie.id)) {
                            ids.push(movie.id);
                            return true;
                        }
                        return false;
                    });
                });

            setLoading(false);
                
            })
            .catch(error => {
                console.log("Error:", error);
                setLoading(false);
            });
    }, [page]);


    const cargarMas = () => {
        setLoading(true);
        setPage (page+1);
    }

    const handleChange = (e) => {
        setTexto(e.target.value);
    }

    let logueado = cookies.get("auth-user");
    let peliculasFiltradas = datos.filter(movie => {
        let titulo = (movie.title || movie.name || "").toLowerCase();
        let textoLower = texto.toLowerCase();
        return titulo.includes(textoLower);
    });
        return (
            <div>
                <div className="filtro-contenedor">
                    <input
                        type="text"
                        placeholder="Filter..."
                        value={texto}
                        onChange={handleChange}
                        className="filtro"
                    />
                </div>

                {loading ? (
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
                                    tipo={props.type}
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

                <button className="boton-cargarmas" onClick={cargarMas}>
                    Load more
                </button>
            </div>
        );
    }


export default MovieSection;