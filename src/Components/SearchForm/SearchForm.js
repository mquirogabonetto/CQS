import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function SearchForm(props) {
    const [searchData, setSearchData] = useState("");
    const [tipo, setTipo] = useState("movie");
    const [errorBusqueda, setErrorBusqueda] = useState("");

    function controlarBusqueda(event) {
        setSearchData(event.target.value);
    }
    function controlarTipo(event) {
        setTipo(event.target.value);
    }
    function enviarForm(event) {
        event.preventDefault();
        if (errorBusqueda === "") {
            setErrorBusqueda("Please enter something to search");
            return;
        }
        setErrorBusqueda("");
        props.history.push("/SearchResults/" + tipo + "/" + searchData);
    }
    return (
        <form className="search-form" onSubmit={(event) => enviarForm(event)}>
            <select className="form-control mb-2" value={tipo} onChange={(event) => controlarTipo(event)}>
                <option value="movie">Movies</option>
                <option value="tv">Shows</option>
            </select>
            <input type="text" name="searchData" placeholder="Search..." value={searchData} onChange={(event) => controlarBusqueda(event)} />
            {errorBusqueda !== "" ? (<p className="text-danger">{errorBusqueda}</p>) : ("")}
            <button type="submit" className="btn btn-success btn-sm">Search</button>
        </form>
    );
}

export default withRouter(SearchForm);
