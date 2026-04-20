import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            errorUsername: "",
            errorEmail: "",
            errorPassword: ""
        };
    }

    submit(event) {
        event.preventDefault();

        let usuarioACrear = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            createdAt: Date.now(),
        };
        if (usuarioACrear.username.length < 3 || usuarioACrear.username.length > 7) {
            this.setState({ errorUsername: "La extensión del username debe ser de 3 a 7 caracteres" });
            return;
        } else {
            this.setState({
                errorUsername: ""
            })
        }
        if (!usuarioACrear.email.includes("@")) {
            this.setState({ errorEmail: "Email mal formateado" });
            return;
        } else {
            this.setState({
                errorEmail: ""
            })
        }
        if (usuarioACrear.password.length < 6) {
            this.setState({ errorPassword: "La extensión del password debe ser de mínimo 6 caracteres" });
            return;
        } else {
            this.setState({
                errorPassword: ""
            })
        }
        let usersStorage = localStorage.getItem("users");
        if (usersStorage !== null) {
            let usersParseado = JSON.parse(usersStorage);
            let usersFiltrado = usersParseado.filter((elemento => elemento.email === this.state.email));
            if (usersFiltrado.length > 0) {
                this.setState({ errorEmail: "Ya existe un usuario con el email ingresado" });
                return;
            } else {
                usersParseado.push(usuarioACrear);
                let usersEnJson = JSON.stringify(usersParseado);
                localStorage.setItem("users", usersEnJson);
            }
        } else {
            let usersInicial = [usuarioACrear];
            let usersEnJson = JSON.stringify(usersInicial);
            localStorage.setItem("users", usersEnJson);
        }
        this.props.history.push("/LogIn");
    }

    render() {
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Username" className="form-control" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    {this.state.errorUsername && (<p className="text-danger">{this.state.errorUsername}</p>)}
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Email" className="form-control" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    {this.state.errorEmail && (<p className="text-danger">{this.state.errorEmail}</p>)}
                </div>

                <div className="form-group">
                    <input type="password" placeholder="Password" className="form-control" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    {this.state.errorPassword && (<p className="text-danger">{this.state.errorPassword}</p>)}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                </button>

            </form>
        );
    }
}

export default SignUpForm;