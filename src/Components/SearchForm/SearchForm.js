import React, {Component} from "react";

class SearchForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            searchData: ""
        };
    }
    controlarCambios(event) {
    this.setState({
        searchData: event.target.value
    });
    }
    enviarForm(event) {
        event.preventDefault();
        this.props.history.push("/searchresults?searchData=" + this.state.searchData);
    }
    render () {
        return (
            <form className="search-form" onSubmit={(event) => this.enviarForm(event)}>
                <input type="text" name="searchData" placeholder="Buscar..." value={this.state.searchData} onChange={(event) => this.controlarCambios(event)}/>
                <button type="submit" className="btn btn-success btn-sm">Buscar</button>
            </form>
        );
    }
}

export default SearchForm;
