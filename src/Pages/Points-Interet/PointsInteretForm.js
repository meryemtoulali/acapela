import react, { Component } from "react";
import { useState } from "react";
import { Accordion, Button, Form } from "react-bootstrap";

import { Formik, Form as FormikForm, Field } from "formik";

import React from "react";

function PointsInteretForm() {
    const initialValues = {
        poiDetails: {
            nomVille: "",
            coord: "",
            score: "",
            type: "",
            services: "",
            image: "",
            video: "",
        },
        poiDescription: {
            nomPoi: "",
            description: "",
            descriptionAudio: "",
            voix: "",
            dictionnaire: "",
            infos: "",
            images: "",
            videos: "",
            audio: "",
        },
    };

    const onSubmit = (values) => {
        console.log("Form data is: ", values);
    };

    return (
        <div className="main-container">
            <div className="inner-container">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <FormikForm>
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h6 style={{ color: "red" }}>
                                        Détails du point d'intérêt
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <Form.Group>
                                            <label htmlFor="poiDetails.nomVille">
                                                Nom de la ville/commune
                                            </label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="poiDetails.nomVille"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDetails.coord">
                                                Coordonnées
                                            </label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="poiDetails.coord"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDetails.score">
                                                Score
                                            </label>
                                            <Field
                                                className="form-range"
                                                type="range"
                                                name="poiDetails.score"
                                                min="0"
                                                max="5"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDetails.type">
                                                Type du point d'intérêt
                                            </label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="poiDetails.type"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDetails.services">
                                                Services associés
                                            </label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="poiDetails.services"
                                            />
                                        </Form.Group>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <h6 style={{ color: "red" }}>
                                        Description du point d'intérêt
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        <Form.Group>
                                            <label htmlFor="poiDescription.nomPoi">
                                                Nom du point d'intérêt
                                            </label>
                                            <Field
                                                as={Form.Control}
                                                type="text"
                                                name="poiDescription.nomPoi"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDescription.description">
                                                Description du point d'intérêt
                                            </label>
                                            <Field
                                                as="textarea"
                                                className="form-control"
                                                name="poiDescription.description"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDescription.descriptionAudio">
                                                Description audio
                                            </label>
                                            <Field
                                                as="textarea"
                                                className="form-control"
                                                name="poiDescription.descriptionAudio"
                                            />
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDescription.voix">
                                                Voix
                                            </label>
                                            <Field
                                                as={Form.Select}
                                                className="form-control"
                                                name="poiDescription.voix"
                                            >
                                                <option value="">
                                                    Sélectionner
                                                </option>

                                                <option value="Manon-BE22k_NT">
                                                    Manon-BE22k_NT
                                                </option>
                                                <option value="Louise22k_NT">
                                                    Louise22k_NT
                                                </option>
                                                <option value="Alice22k_NT">
                                                    Alice22k_NT
                                                </option>
                                            </Field>
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDescription.dictionnaire">
                                                Dictionnaire
                                            </label>
                                            <Field
                                                as={Form.Select}
                                                className="form-control"
                                                name="poiDescription.dictionnaire"
                                            >
                                                <option value="">
                                                    Sélectionner
                                                </option>
                                                <option value="test">
                                                    test
                                                </option>
                                            </Field>
                                        </Form.Group>

                                        <Form.Group>
                                            <label htmlFor="poiDescription.infos">
                                            Informations additionnelles
                                            </label>
                                            <Field
                                                as="textarea"
                                                className="form-control"
                                                name="poiDescription.infos"
                                            />
                                        </Form.Group>


                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h6 style={{ color: "red" }}>
                                        Date du point d'intérêt
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, co
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Button type="submit">Valider</Button>
                    </FormikForm>
                </Formik>
            </div>
        </div>
    );
}

export default PointsInteretForm;

// function PointsInteretForm(props) {
//     const initPoiDetails = [
//         {
//             nomVille: "",
//             coord: "",
//             score: "",
//             type: "",
//             services: "",
//             image: "",
//             video: "",
//         },
//     ];

//     const initPoiDescription = [{
//         nomPoi: "",
//         description: "",
//         descriptionAudio: "",
//         voix: "",
//         dictionnaire: "",
//         infos: "",
//         images: "",
//             videos: "",
//             audio: "",

//     }]

//     const initPoiDate = [{
//         periodeLibre: true,
//         dateDebut: "",
//         dateFin: "",

//     }]
//     const [poiDetais, setPoiDetails] = useState(initPoiDetails); //each state element with its setter function
//     const [age, setAge] = useState(100);

//     return (
//         <div>
//                 <div className="main-container">
//                     <div className="inner-container">form</div>
//                 </div>
//         </div>
//     );
// }
