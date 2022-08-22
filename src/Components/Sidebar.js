import React, { Component } from "react";
import menu from "../Assets/Images/hamburger-menu.svg";
import "../Assets/Styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleUser, faLandmark, faLocationPin, faMap, faTrash, faLock, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <FontAwesomeIcon className="me-2" icon={faHouse}/>
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/espace-client">
                            <FontAwesomeIcon className="me-2"icon={faCircleUser}/>
                                Espace client
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/communes-villes">
                            <FontAwesomeIcon className="me-2"icon={faLandmark}/>
                                Communes / Villes
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/points-d-interet/liste">
                            <FontAwesomeIcon className="me-2"icon={faLocationPin}/>
                                Points d'intérêt
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/circuits/liste">
                            <FontAwesomeIcon className="me-2"icon={faMap}/>
                                Circuits
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/corbeille">
                            <FontAwesomeIcon className="me-2"icon={faTrash}/>
                                Corbeille
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/modifier-mot-de-passe">
                            <FontAwesomeIcon className="me-2"icon={faLock}/>
                                Modifier mon mot de passe
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/deconnexion">
                            <FontAwesomeIcon className="me-2"icon={faArrowRightFromBracket}/>
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
