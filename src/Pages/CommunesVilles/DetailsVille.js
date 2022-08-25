import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../Assets/Styles/ListePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
                    <fieldset className="fieldset-recherche">
                        <div className="fieldset-recherche-titre">
                            Détails de la commune/ville
                        </div>
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
                            <div className="col-10 text-start">
                                Créer un point d'intérêt
                            </div>

                            <div className="col-2 text-end pe-3">
                                <Link to="/points-d-interet/form">
                                    <FontAwesomeIcon icon={faPlus} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blueTitle my-3 p-2 ">
                        <div className="row">
                            <div className="col-10 text-start">
                                Voir la liste des points d'intérêt
                            </div>

                            <div className="col-2 text-end pe-3">
                            <Link to="/points-d-interet/liste">
                                    <FontAwesomeIcon icon={faList} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsVille;
