import React from "react";
import { withRouter } from 'react-router-dom';
import "./LogOutButton.css";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function LogOutButton(props) {
    function logout() {
        cookies.remove("auth-user", { path: "/" });
        props.history.push("/LogIn");
    }
    return (
        <div>
            <button className='button-logout' onClick={() => logout()}>Log Out</button>
        </div>

    );
}


export default withRouter(LogOutButton);