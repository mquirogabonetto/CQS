import React, { Component } from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <video autoPlay muted loop className="video-bg">
                    <source src="/videos/backgroundvideo.mp4" type="video/mp4" />
                </video>

                <Header />

                <div className="form-container">
                    <div className="register-box">
                        <h2>Sign Up</h2>
                        <SignUpForm history={this.props.history} />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default SignUp;