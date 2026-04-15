import React, { Component } from "react";

class LogInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
        }
    }

    submit(event) {
        event.preventDefault ();

        let usersStorage = localStorage.getItem("users");

        if (usersStorage == null) {
            this.setState({error: "Las credenciales ingresadas no son válidas"});
            return;
        } else {
            usersParseado = JSON.parse(usersStorage);
            let usersFiltrado = usersParseado.filter((elemento => elemento.email === this.state.email));
            // compara el mail guardado en el estado (se va actualizando cuando el usuario escribe)
            if (usersFiltrado === 0) {
                this.setState({error: "El usuario ingresado no existe"});
                return
            } else {
                if (usersFiltrado[0].password !== this.state.password) {
                    this.setState({error: "Las credenciales ingresadas no son válidas"});
                    return;
                } else {
                    sessionStorage.setItem("usuarioEnSesion", JSON.stringify({sesionActiva: true}));
                    this.props.history.push("/");
                }
            }
        }
    }

    render() {
        return (
            <form onSubmit={(e) => this.submit(e)}>
               
                <div className="form-group">
                    <input type="text" placeholder = "Email" className="form-control" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                    {this.state.errorEmail && (<p className="text-danger">{this.state.errorEmail}</p>)}
                </div>

                <div className="form-group">
                    <input type="password" placeholder = "Password" className="form-control" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    {this.state.errorPassword && (<p className="text-danger">{this.state.errorPassword}</p>)}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Log In
                </button>

            </form>
        );
    }
}

export default LogInForm;