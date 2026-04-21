import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import './MovieCard.css'

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      mostrarInfo: false,
      esFavorito: false
    }
  }

  componentDidMount() {
    let tipo = this.props.tipo;
    let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
    let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];
    let existe = favoritos.find(f => f.id === this.props.id);

    if (existe) {
      this.setState({ esFavorito: true });
    }
  }

  mostrar() {
    this.setState({
      mostrarInfo: !this.state.mostrarInfo
    })
  }

  manejarFavorito() {
    let tipo = this.props.tipo;
    let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
    let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];
    let existe = favoritos.find(f => f.id === this.props.id);

    if (existe) {
      favoritos = favoritos.filter(f => f.id !== this.props.id);
      this.setState({ esFavorito: false });

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
      this.setState({ esFavorito: true });
    }
    localStorage.setItem(storageKey, JSON.stringify(favoritos));
  }

  render() {
    return (
      <div className="character-card">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.title} />
        <h4>{this.props.title}</h4>
        <div className="buttons">
          <button onClick={() => this.mostrar()}>
            {this.state.mostrarInfo ? "See less" : "See description"}
          </button>
          <Link to={`/Detalle/${this.props.tipo}/${this.props.id}`}>
            <button>See details</button>
          </Link>
        </div>
        {this.state.mostrarInfo && <p>{this.props.overview}</p>}

        {this.props.logueado && (
          <button className="btn-favorites" onClick={() => this.manejarFavorito()}>
            {this.state.esFavorito ? "Remove ❌" : "Add to favorites ⭐"}
          </button>
        )}
      </div>
    )
  }
}

export default withRouter(MovieCard); 
