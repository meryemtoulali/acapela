import React, { Component } from "react";
import "../Assets/Styles/Accueil.css";

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="red-circle"></div>
                <div className="message">Votre voix compte</div>
            </div>
        );
    }
}

class Accueil extends Component {
    render() {
        return (
            <div className="main-container">
                <Banner />
            </div>
        );
    }
}

export default Accueil;
