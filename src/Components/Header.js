import React, { Component } from "react";
import menu from "../Assets/Images/hamburger-menu.svg";
import logo from "../Assets/Images/logo.png";
import "../Assets/Styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div className="header-row">
                <div className="d-flex flex-row align-items-center">
                    <div>
                        <FontAwesomeIcon
                            icon={faBars}
                            className="menu-icon"
                            onClick={this.props.toggleOpen}
                        />
                    </div>
                    <Link to="/">
                        <img className="logo" src={logo} alt="" />
                    </Link>
                </div>
                {/* <img
                    className="logo"
                    src={logo}
                    alt=""
                />
                <img className="menu-icon" src={menu} alt="" onClick={this.props.toggleOpen} /> */}
            </div>
        );
    }
}

export default Header;
