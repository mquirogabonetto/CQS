import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loader from "../../Screens/Loader/Loader";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function HomeSection(props) {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = "b604e547cd3fb7ac5cc35be72e2e0516";
        let type = props.type;
        const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDatos(data.results || []);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error:", error);
                setLoading(false);
            });
    }, [props.type]);

    let logueado = cookies.get("auth-user");

    return (
        <div>
            <section className="cardContainer">
                {loading ? (
                    <Loader />
                ) : (
                    datos.slice(0, 8).map((movie) => (
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
        </div>
    );
}

export default HomeSection;