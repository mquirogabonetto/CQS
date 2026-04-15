import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import './Detalle.css';
import Loader from "../Loader/Loader";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detalle: null,
            cargando: true,
            esFavorito: false
        };
    }
    componentDidMount() {
        let tipo = this.props.match.params.tipo;
        let id = this.props.match.params.id;

        fetch("https://api.themoviedb.org/3/" + tipo + "/" + id + "?api_key=b604e547cd3fb7ac5cc35be72e2e0516")
            .then((response) => response.json())
            .then((data) => {
                let tipo = this.props.match.params.tipo;
                let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";

                let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];
                let existe = favoritos.find(f => f.id === data.id);

                this.setState({ detalle: data, cargando: false, esFavorito: existe ? true : false });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ cargando: false });
            });
    }

      manejarFavorito() {
    let tipo = this.props.tipo;
    let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
    let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];
    let existe = favoritos.find (f => f.id === this.props.id);

    if (existe) {
      favoritos = favoritos.filter(f => f.id !== this.props.id);
      this.setState({esFavorito: false});
      
      if (this.props.onRemove) {
        this.props.onRemove(this.props.id, tipo);
      }

    } else {
      favoritos.push({
        id: this.props.id,
        title: this.props.title,
        poster: this.props.poster,
        overview: this.props.overview
      });
      this.setState({esFavorito: true});
      localStorage.setItem(storageKey, JSON.stringify(favoritos));
    }
    localStorage.setItem(storageKey, JSON.stringify(favoritos));
  }

    render() {
        let tipo = this.props.match.params.tipo;
        return (
            <div className="detalle-page">
                <video autoPlay muted loop className="video-bg">
                    <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
                </video>
                <Header />
                <div className="container">
                    <h2 className={"alert " + (tipo === "movie" ? "alert-primary" : "alert-warning")}>{tipo === "movie" ? "Movie" : "Show"}</h2>
                    {this.state.cargando ? (<Loader />) : (
                        <section className="row">
                            <div className="col-md-6 detalle-poster">
                                <img src={"https://image.tmdb.org/t/p/w342/" + this.state.detalle.poster_path} className="col-md-6" alt={tipo === "movie" ? this.state.detalle.title : this.state.detalle.name} />
                                {this.state.esFavorito ? (
                                    <button className="btn-favorites" onClick={() => this.manejarFavorito()}>Remove ❌</button>
                                ) : (
                                    <button className="btn-favorites" onClick={() => this.manejarFavorito()}>Add to favorites ⭐</button>)}
                            </div>
                            <div className="col-md-6 detalle-info">
                                <h3>{tipo === "movie" ? this.state.detalle.title : this.state.detalle.name}</h3>
                                <p><strong>Synopsis:</strong> {this.state.detalle.overview}</p>
                                <p><strong>Rating:</strong> {this.state.detalle.vote_average}</p>
                                <p><strong>Release date:</strong> {tipo === "movie" ? this.state.detalle.release_date : this.state.detalle.first_air_date}</p>
                                {tipo === "movie" ? (<p><strong>Runtime:</strong> {this.state.detalle.runtime} min</p>) : ("")}
                                <p><strong>Genre:</strong> {this.state.detalle.genres && this.state.detalle.genres.length > 0 ? this.state.detalle.genres[0].name : "Unknown"}</p>
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