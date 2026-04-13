import React, { Component } from "react";
import './MovieCard.css'
import { withRouter, Link } from "react-router-dom";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      mostrarInfo: false
    }
  }

  mostrar() {
    this.setState({
      mostrarInfo: !this.state.mostrarInfo
    })
  }

  render() {
    console.log("tipo:", this.props.tipo, "id:", this.props.id)
    return (
      <div className="character-card">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.nombre} />
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
        <button className="btn-favorites">Add to favorites ⭐</button>
      </div>
    )
  }
}

export default withRouter(MovieCard); 
