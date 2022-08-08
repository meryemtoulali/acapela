import React, { Component } from "react";
import menu from "../Assets/Images/hamburger-menu.svg";
import "../Assets/Styles/Sidebar.css";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
    render() {
        return (

            <div className="sidebar">
                <div>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <img src={menu} alt="" />
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/espace-client">
                                <img src={menu} alt="" />
                                Espace client
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/communes-villes">
                                <img src={menu} alt="" />
                                Communes / Villes
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/points-d-interet">
                                <img src={menu} alt="" />
                                Points d'intérêt
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/circuits">
                                <img src={menu} alt="" />
                                Circuits
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/corbeille">
                                <img src={menu} alt="" />
                                Corbeille
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/modifier-mot-de-passe">
                                <img src={menu} alt="" />
                                Modifier mon mot de passe
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/deconnexion">
                                <img src={menu} alt="" />
                                Déconnexion
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
