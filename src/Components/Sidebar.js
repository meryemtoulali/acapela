import React, { Component } from "react";
import "../Assets/Styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCircleUser,
    faLandmark,
    faLocationPin,
    faMap,
    faTrash,
    faLock,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

class SideBar extends Component {
    render() {
        const open = this.props.open;
        return (
            <div
                className={
                    open ? "sidebar sidebar-open" : "sidebar sidebar-closed"
                }
            >
                <ul>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon className="sidebar-icon" icon={faHouse} />
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/espace-client">
                            <FontAwesomeIcon
                                className="sidebar-icon"
                                icon={faCircleUser}
                            />
                            Espace client
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/communes-villes">
                            <FontAwesomeIcon
                                className="sidebar-icon"
                                icon={faLandmark}
                            />
                            Communes / Villes
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/points-d-interet/liste">
                            <FontAwesomeIcon
                                className="sidebar-icon "
                                icon={faLocationPin}
                            />
                            Points d'intérêt
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/circuits/liste">
                            <FontAwesomeIcon className="sidebar-icon " icon={faMap} />
                            Circuits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/corbeille">
                            <FontAwesomeIcon className="sidebar-icon " icon={faTrash} />
                            Corbeille
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/modifier-mot-de-passe">
                            <FontAwesomeIcon className="sidebar-icon " icon={faLock} />
                            Modifier mon mot de passe
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/deconnexion">
                            <FontAwesomeIcon
                                className="sidebar-icon "
                                icon={faArrowRightFromBracket}
                            />
                            Déconnexion
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBar;
