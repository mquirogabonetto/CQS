import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import "./LogOutButton.css";

const cookies = new Cookies();

class LogOutButton extends Component {

    logout() {
        cookies.remove("auth-user");
        sessionStorage.removeItem("usuarioEnSesion");
        this.props.history.push("/LogIn");
    }

    render() {
        return (
            <div>
                <button className='button-logout' onClick={() => this.logout()}>Log Out</button>
            </div>
            
        );
    }
}

export default withRouter(LogOutButton);