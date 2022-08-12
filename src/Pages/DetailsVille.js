import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "../Assets/Styles/CommunesVilles.css"


export const DetailsVille = (props) => {
    const updateId = useParams().id;
    const [id, setId] = useState(updateId);
    const [details, setDetails] = useState({
        id: 1,
        image: "https://thumbs.dreamstime.com/b/paradis-tropical-4934272.jpg",
        city: "San Tropez",
        description: "San Tropez description",
    });

    return (
        <>
            <div className="main-container">
                <div className="inner-container">
                    ville id is {id}
                    <h4 className="pb-4">Détails de la commune/ville</h4>
                    <fieldset>
                        <div className="row">
                            <div className="col-4">image</div>
                            <div className="col">
                                <div className="fw-bold">{details.city}</div>
                                <div>{details.description}</div>
                            </div>
                        </div>
                    </fieldset>

                    
                    <div className="blueTitle my-3 p-2 ">
                        <div className="row">
                        <div className="col text-start">
                            Créer un point d'intérêt
                            </div>

                            <div className="col text-end">+</div>
                    </div>
                    </div>

                    <div className="blueTitle my-3 p-2 ">
                        <div className="row">
                        <div className="col text-start">
                        Voir la liste des points d'intérêt
                            </div>

                            <div className="col text-end">O</div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsVille;
