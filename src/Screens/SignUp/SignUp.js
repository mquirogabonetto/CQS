import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorEmail: "",
            errorPassword: "",
        };
    }

    evitarSubmit(event) {
        event.preventDefault();

        this.setState({ errorEmail: "", errorPassword: "" });

        let email = this.state.email;
        let password = this.state.password;
        
        if (password.length < 6) {
            this.setState({ errorPassword: "La contraseña debe tener mínimo 6 caracteres" });
            return;
        }

        let usuarios = localStorage.getItem ("usuarios");
        if (usuarios===null){
            usuarios = []
        } else {
            usuarios = JSON.parse (usuarios);
        }

        let emailsExistentes = usuarios.filter((usuario) => usuario.email === email);
        if (emailsExistentes.length > 0) {
            this.setState({ errorEmail: "El email ya está en uso." });
            return;
        }

        let nuevoUsuario = { email: email, password: password };
        usuarios.push(nuevoUsuario);
        let usuariosJSON = JSON.stringify (usuarios);
        localStorage.setItem("usuarios", usuariosJSON);

        alert("¡Cuenta creada con éxito!");
    }

    controlarCambios(event) {
        if (event.target.id === "email") {
            this.setState({ email: event.target.value });
        } else if (event.target.id === "password") {
            this.setState({ password: event.target.value });
        }
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={(event) => this.evitarSubmit(event)}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingresá tu email" onChange={(event) => this.controlarCambios(event)} value={this.state.email} />
                            {this.state.errorEmail !== "" ? (<p className="text-danger">{this.state.errorEmail}</p>) : ("")}
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event) => this.controlarCambios(event)} value={this.state.password}/>
                            {this.state.errorPassword !== "" ? (<p className="text-danger">{this.state.errorPassword}</p>) : ("")}
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
                    </form>
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <a href="login.html">Iniciar sesión</a></p>
                </div>
            </div>
        );
    }
}

export default SignUp;
