import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies()

function LogInForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function submit(event) {
        event.preventDefault();

        const usersStorage = localStorage.getItem("users");

        if (usersStorage === null) {
            setError("Invalid credentials");
            return;
        } else {
            const usersParseado = JSON.parse(usersStorage);
            const usersFiltrado = usersParseado.filter(elemento => elemento.email === email);
            if (usersFiltrado.length === 0) {
                setError("Invalid credentials");
                return;
            }
            if (usersFiltrado[0].password !== password) {
                setError("Invalid credentials");
                return;
            }
            cookies.set("auth-user", usersFiltrado[0].email, { path: "/" });
            props.history.push("/");
        }
    }


    return (
        <form onSubmit={(e) => submit(e)}>

            <div className="LogIn-form">
                <input type="text" placeholder="Email" className="LogIn-Input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="LogIn-form">
                <input type="password" placeholder="Password" className="LogIn-Input" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && (
                <p className="text-danger">{error}</p>
            )}
            <button type="submit" className="LogIn-button">
                Log In
            </button>

        </form>
    );
}



export default withRouter(LogInForm);