import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { changerMdp } from "../Services/Connexion";

const ModifierMdp = ({ setToken }) => {
    const [oldPw, setOldPw] = useState();
    const [pw, setPw] = useState();
    const [confirmPw, setConfirmPw] = useState();
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!pw || !confirmPw || !oldPw) {
            console.log("Please fill all fields");
            setError("Merci de renseigner tous les champs");
            return;
        }
        if (confirmPw !== pw) {
            console.log("The passwords don't match!");
            setError("Les mots de passe doivent être identiques.");
            return;
        }
        changerMdp(pw);
        console.log("The passwords match");
        setError("")
        setPw("");
        setConfirmPw("");
        setOldPw("");
        setShow(true);
    };

    return (
        <div className="inner-container">
            <div className="page-title">Modifier le mot de passe</div>
            {show && (
                <Alert
                    variant="success"
                    onClose={() => setShow(false)}
                    dismissible
                >
                    Le mot de passe a été modifié avec succès.
                </Alert>
            )}
            <div className="password-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <div className="row align-items-center mb-3">
                            <div className="col-sm-4">
                                <Form.Label htmlFor="oldPw">
                                    Ancien mot de passe :
                                </Form.Label>
                            </div>
                            <div className="col-sm-8 ">
                                <Form.Control
                                    name="oldPw"
                                    type="password"
                                    value={oldPw}
                                    onChange={(e) => setOldPw(e.target.value)}
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div className="row align-items-center mb-3">
                            <div className="col-sm-4">
                                <Form.Label htmlFor="pw">
                                    Nouveau mot de passe :
                                </Form.Label>
                            </div>
                            <div className="col-sm-8">
                                <Form.Control
                                    name="pw"
                                    type="password"
                                    value={pw}
                                    onChange={(e) => setPw(e.target.value)}
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group>
                        <div className="row align-items-center mb-3">
                            <div className="col-sm-4">
                                <Form.Label htmlFor="confirmPw">
                                    Confirmer le mot de passe :
                                </Form.Label>
                            </div>
                            <div className="col-sm-8">
                                <Form.Control
                                    name="confirmPw"
                                    type="password"
                                    value={confirmPw}
                                    onChange={(e) =>
                                        setConfirmPw(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </Form.Group>
                    <div className="text-danger text-center">{error}</div>

                    <div className="mt-3">
                        <div className="d-flex flex-row justify-content-center">
                            <button
                                className="btn btn-primary me-2"
                                type="submit"
                            >
                                Enregistrer
                            </button>
                            <Link to="/">
                                <button
                                    className="btn btn-secondary me-2"
                                    type="button"
                                >
                                    Annuler
                                </button>
                            </Link>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default ModifierMdp;
