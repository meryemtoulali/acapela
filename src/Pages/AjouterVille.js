import { postVille, putVille } from "../Services/ServiceVilles";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export const AjouterVille = (props) => {

    const updateId = useParams().id;
    //const itemId = navigation.getParam('itemId', 'NO-ID');
    const [nomVille, setNomVille] = useState("");
    const [descriptionVille, setDescriptionVille] = useState("");

    const [image, setImage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        if(updateId !== undefined) {formdata.append("id", nomVille);}
        formdata.append("city", nomVille);
        formdata.append("description", descriptionVille);
        formdata.append("image", image);

        if(updateId !== undefined) {putVille(formdata)}
        else { postVille(formdata);}


        navigate('/communes-villes');
    };
    const handleChange = (e) => {
        if (e.target.name === "nomVille") {
            setNomVille(e.target.value);
        }
        if (e.target.name === "descriptionVille") {
            setDescriptionVille(e.target.value);
        }
    };

    const handleFileSelect = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="main-container">
            <div className="inner-container">
                <h5>Créer une commune/ville</h5>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <Form.Group>
                                <Form.Label htmlFor="nomVille">
                                    Nom de la commune/ville
                                </Form.Label>
                                <Form.Control
                                    name="nomVille"
                                    type="text"
                                    value={nomVille}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </div>

                        <div className="col-4">
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    name="image"
                                    type="file"
                                    onChange={handleFileSelect}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group>
                        <Form.Label htmlFor="descriptionVille">
                            Description de la commune/ville
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            name="descriptionVille"
                            value={descriptionVille}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <br />

                    <button className="btn btn-success mx-5" type="submit">
                        Valider
                    </button>
                    <button className="btn btn-secondary mx-5">Annuler</button>
                </Form>
            </div>
        </div>
    );
};

export default AjouterVille;
