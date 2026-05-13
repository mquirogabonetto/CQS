import React from "react";
import { useState } from "react";

function SignUpForm(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    function submit(event) {
        event.preventDefault();

        let usuarioACrear = {
            username: username,
            email: email,
            password: password,
            createdAt: Date.now(),
        };
        if (usuarioACrear.username.length < 3 || usuarioACrear.username.length > 7) {
            setErrorUsername ("Username must be between 3 and 7 characters");
            return;
        } else {
            setErrorUsername ("");
            
        }
        if (!usuarioACrear.email.includes("@")) {
            setErrorEmail ("Invalid email format");
            return;
        } else {
            setErrorEmail ("");
        }
        if (usuarioACrear.password.length < 6) {
            setErrorPassword("Password must be at least 6 characters");
            return;
        } else {
                setErrorPassword ("");
            
        }
        let usersStorage = localStorage.getItem("users");
        if (usersStorage !== null) {
            let usersParseado = JSON.parse(usersStorage);
            let usersFiltrado = usersParseado.filter((elemento => elemento.email === email));
            if (usersFiltrado.length > 0) {
                setErrorEmail ("An account with this email already exists");
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
        props.history.push("/LogIn");
    }
        return (
            <form onSubmit={(e) => submit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={(e) => setUsername (e.target.value)} />
                    {errorUsername && (<p className="text-danger">{errorUsername}</p>)}
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail (e.target.value)} />
                    {errorEmail && (<p className="text-danger">{errorEmail}</p>)}
                </div>

                <div className="form-group">
                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword (e.target.value)} />
                    {errorPassword && (<p className="text-danger">{errorPassword}</p>)}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                </button>

            </form>
        );
    }

export default SignUpForm;