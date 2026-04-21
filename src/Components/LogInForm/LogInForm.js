import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class LogInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
        }
    }

    submit(event) {
        event.preventDefault();

        const usersStorage = localStorage.getItem("users");

        if (usersStorage === null) {
            this.setState({ error: "Invalid credentials" });
            return;
        } else {
            const usersParseado = JSON.parse(usersStorage);
            const usersFiltrado = usersParseado.filter(elemento => elemento.email === this.state.email);
            if (usersFiltrado.length === 0) {
                this.setState({ error: "Invalid credentials" });
                return;
            }
            if (usersFiltrado[0].password !== this.state.password) {
                this.setState({ error: "Invalid credentials" });
                return;
            }
            cookies.set("auth-user", usersFiltrado[0].email, { path: "/" });
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <form onSubmit={(e) => this.submit(e)}>

                <div className="LogIn-form">
                    <input type="text" placeholder="Email" className="LogIn-Input" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                </div>

                <div className="LogIn-form">
                    <input type="password" placeholder="Password" className="LogIn-Input" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                {this.state.error && (
                    <p className="text-danger">{this.state.error}</p>
                )}
                <button type="submit" className="LogIn-button">
                    Log In
                </button>

            </form>
        );
    }
}


export default withRouter(LogInForm);