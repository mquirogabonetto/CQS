import React from "react";
import "./MovieSection.css";
import {Link} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard"

class MovieSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            datos: '',
        }
    }
    componentDidMount(){
        fetch()
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({datos: data.results})
            })
            .catch(error => console.log(error));
    }
    render(){
        return(
            <div>
                  <section className='cardContainer'>
                {this.state.datos === "" ? <h3>Cargando...</h3> :
                this.state.datos.map((character, index) => (
                    <MovieCard  /> // aca traemos los datos de la API y los guardamos para MovieCard con nombre={objeto.atributo}
                ))}
                </section>
            </div>
        );
    };
}

export default MovieSection;