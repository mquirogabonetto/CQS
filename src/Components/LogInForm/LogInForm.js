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
}

export default LogInForm;