import React, {Component} from "react";
import './MovieCard.css'

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      mostrarInfo: false
    }
  }

  mostrar(){
    this.setState ({
      mostrarInfo: !this.state.mostrarInfo
    })
  }

  render(){
    return(
      <div className="character-card">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.nombre} />
        <h4>{this.props.title}</h4>
        {this.state.mostrarInfo === true ? <button onClick = {() => this.mostrar()} >
          Ver menos </button> : <button onClick = {() => this.mostrar()} > Ver descripcion </button>}
        {this.state.mostrarInfo === true ? <p>{this.props.overview}</p> : null}
      </div>
    )
  }
}

export default MovieCard;
