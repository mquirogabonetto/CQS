import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import './MovieCard.css'

function MovieCard(props) {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    let storageKey = props.tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
    let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];
    let existe = favoritos.find(f => f.id === props.id);

    if (existe) {
      setEsFavorito(true);
    }
  }, []);

  const mostrar = () => {
    mostrarInfo: (!setMostrarInfo)
  }

  const manejarFavorito = () => {
    let tipo = props.tipo;
    let storageKey = tipo === "movie" ? "favoritosMovies" : "favoritosSeries";
    let favoritos = JSON.parse(localStorage.getItem(storageKey)) || [];
    let existe = favoritos.find(f => f.id === props.id);

    if (existe) {
      favoritos = favoritos.filter(f => f.id !== props.id);
      setEsFavorito(false);

      if (props.onRemove) {
        props.onRemove(props.id, tipo);
      }

    } else {
      favoritos.push({
        id: props.id,
        title: props.title,
        poster: props.poster,
        overview: props.overview
      });
      setEsFavorito(true);
    }
    localStorage.setItem(storageKey, JSON.stringify(favoritos));
  }

  return (
    <div className="character-card">
      <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.title} />
      <h4>{props.title}</h4>
      <div className="buttons">
        <button onClick={mostrar}>
          {mostrarInfo ? "See less" : "See description"}
        </button>
        <Link to={`/Detalle/${props.tipo}/${props.id}`}>
          <button>See details</button>
        </Link>
      </div>
      {this.state.mostrarInfo && <p>{props.overview}</p>}

      {this.props.logueado && (
        <button className="btn-favorites" onClick={manejarFavorito}>
          {esFavorito ? "Remove ❌" : "Add to favorites ⭐"}
        </button>
      )}
    </div>
  )

}

export default withRouter(MovieCard); 
