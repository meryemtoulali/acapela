import { Accordion, Button } from "react-bootstrap";
import { Formik, Form as FormikForm } from "formik";
import { Tabs, Tab } from "react-bootstrap";
import { initialValues, validationSchema } from "./PoiFormVariables";
import { postPOI, putPOI } from "../../Services/ServicePoi";
import { useNavigate, useParams } from "react-router-dom";

import React from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "../../Assets/Styles/PointsInteretForm.css";
import PoiDetailsSection from "./PoiDetailsSection";
import PoiDescriptionSection from "./PoiDescriptionSection";
import PoiDateSection from "./PoiDateSection";

function PointsInteretForm() {
    const languages = ["fr", "ar", "en"];
    const [key, setKey] = useState(languages[0]);
    const updateId = useParams().id;
    console.log("updateID is ", updateId);
    const navigate = useNavigate();

    const onSubmit = (values) => {
        const formdata = values;
        console.log("Form data is: ", values);
        console.log("inside funciton update id is", updateId);
        if (updateId === undefined) {
            console.log("updateID is undef");
            postPOI(formdata);
        } else {
            console.log("updateID is not undef");
            putPOI(formdata, updateId);
        }

        navigate("/points-d-interet/liste");
    };

    return (
        <div className="main-container">
            <div className="inner-container">
                {updateId && (
                    <h5 className="page-title"> Modifier le point d'intérêt</h5>
                )}
                {!updateId && (
                    <h5 className="page-title"> Créer un point d'intérêt</h5>
                )}
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({ values, setFieldValue }) => (
                        <FormikForm>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h6 style={{ color: "red" }}>
                                            Détails du point d'intérêt
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <PoiDetailsSection
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h6 style={{ color: "red" }}>
                                            Description du point d'intérêt
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Tabs
                                            id="langTab"
                                            activeKey={key}
                                            onSelect={(e) => setKey(e)}
                                        >
                                            {languages.map((lang, index) => {
                                                return (
                                                    <Tab
                                                        key={index}
                                                        eventKey={lang}
                                                        title={lang}
                                                    >
                                                        <div className="pt-3">
                                                            <PoiDescriptionSection
                                                                lang={lang}
                                                                values={values}
                                                                setFieldValue={
                                                                    setFieldValue
                                                                }
                                                            />
                                                        </div>
                                                    </Tab>
                                                );
                                            })}
                                        </Tabs>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h6 style={{ color: "red" }}>
                                            Date du point d'intérêt
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <PoiDateSection
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="d-flex flex-row justify-content-end mt-3">
                                <Button
                                    variant="primary"
                                    className="me-3"
                                    type="submit"
                                >
                                    Valider
                                </Button>
                                <Button variant="secondary" type="button">
                                    Annuler
                                </Button>
                            </div>
                        </FormikForm>
                    )}
                </Formik>
            </div>
        </div>
    );
}
//on submit check isRecurrence
//if true, don't submit poiDate.recurrenceOptions
//if false, don't submit poiDate.periodes

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
