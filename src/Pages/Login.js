import React, { useState } from "react";
import { Form } from "react-bootstrap";
import logo from "../Assets/Images/logo.png";
import "../Assets/Styles/Login.css";
import { loginUser } from "../Services/Connexion";

export const Login = ({ setToken }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password,
        });
        setToken(token);
    };

    return (
        <>
            <div className="header-row">
                <div className="d-flex flex-row align-items-center">
                    <img className="logo" src={logo} alt="" />
                </div>
            </div>
            <div className="login-container">
                <div className="inner-container">
                    <div className="login-form">
                        <div className="text-center">
                            <h3 className="page-title">Se connecter</h3>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <div className="row align-items-center mb-3">
                                    <div className="col-sm-4">
                                        <Form.Label htmlFor="username">
                                            Identifiant :
                                        </Form.Label>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <Form.Control
                                            name="username"
                                            type="text"
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <div className="row align-items-center mb-3">
                                    <div className="col-sm-4">
                                        <Form.Label htmlFor="password">
                                            Mot de passe :
                                        </Form.Label>
                                    </div>
                                    <div className="col-sm-8">
                                        <Form.Control
                                            name="password"
                                            type="password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </Form.Group>

                            <div className="d-flex flex-row justify-content-end">
                                {/* <Form.Check
                                    id="rememberMe"
                                    type="checkbox"
                                    label="Rester connecté"
                                /> */}
                                <div
                                    style={{
                                        color: "#fd2b2b",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Mot de passe oublié ?
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="d-flex flex-row justify-content-center">
                                    <button
                                        className="btn btn-primary me-2"
                                        type="submit"
                                    >
                                        Se connecter
                                    </button>
                                    <button
                                        className="btn btn-secondary me-2"
                                        type="button"
                                    >
                                        Créer un compte
                                    </button>
                                </div>
                            </div>
                        </Form>{" "}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
