import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchData: "",
            tipo: "movie",
            errorBusqueda: "",
        };
    }
    controlarBusqueda(event) {
        this.setState({ searchData: event.target.value });
    }
    controlarTipo(event) {
        this.setState({ tipo: event.target.value });
    }
    enviarForm(event) {
        event.preventDefault();
        let busqueda = this.state.searchData;
        let tipo = this.state.tipo;
        if (busqueda === "") {
            this.setState({ errorBusqueda: "Please enter something to search" });
            return;
        }
        this.setState({ errorBusqueda: "" });
        this.props.history.push("/SearchResults/" + tipo + "/" + busqueda);
    }
    render() {
        return (
            <form className="search-form" onSubmit={(event) => this.enviarForm(event)}>
                <select className="form-control mb-2" value={this.state.tipo} onChange={(event) => this.controlarTipo(event)}>
                    <option value="movie">Movies</option>
                    <option value="tv">Shows</option>
                </select>
                <input type="text" name="searchData" placeholder="Search..." value={this.state.searchData} onChange={(event) => this.controlarBusqueda(event)} />
                {this.state.errorBusqueda !== "" ? (<p className="text-danger">{this.state.errorBusqueda}</p>) : ("")}
                <button type="submit" className="btn btn-success btn-sm">Search</button>
            </form>
        );
    }
}

export default withRouter(SearchForm);
