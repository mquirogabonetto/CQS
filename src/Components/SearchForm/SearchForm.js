import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            searchData: "",
            tipo: "movie",
        };
    }
    controlarBusqueda(event) {
    this.setState({searchData: event.target.value});
    }
    controlarTipo(event) {
        this.setState({ tipo: event.target.value });
    }
    enviarForm(event) {
        event.preventDefault();
        let busqueda = this.state.searchData;
        let tipo = this.state.tipo;
        this.props.history.push("/SearchResults/" + tipo + "/" + busqueda);
    }
    render () {
        return (
            <form className="search-form" onSubmit={(event) => this.enviarForm(event)}>
                <select className="form-control mb-2" value={this.state.tipo} onChange={(event) => this.controlarTipo(event)}>
                    <option value="movie">Películas</option>
                    <option value="tv">Series</option>
                </select>
                <input type="text" name="searchData" placeholder="Buscar..." value={this.state.searchData} onChange={(event) => this.controlarBusqueda(event)}/>
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
            </form>
        );
    }
}

export default withRouter (SearchForm);
