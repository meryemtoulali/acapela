import React, { Component } from "react";
import menu from "../Assets/Images/hamburger-menu.svg";
import "../Assets/Styles/Sidebar.css";

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div>
                    <ul>
                        <li className="active">
                            <img src={menu} alt="" />
                            Accueil
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Espace client
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Communes / Villes
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Points d'intérêt
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Circuits
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Circuits
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Corbeille
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Modifier mon mot de passe
                        </li>
                        <li>
                            <img src={menu} alt="" />
                            Déconnexion
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
