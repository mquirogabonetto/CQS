import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./LogOutButton.css";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LogOutButton extends Component {

    logout() {
        cookies.remove("auth-user", { path: "/" });
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