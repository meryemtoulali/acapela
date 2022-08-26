import { Accordion, Button } from "react-bootstrap";
import { Formik, Form as FormikForm } from "formik";
import { Tabs, Tab } from "react-bootstrap";
import { initialValues, validationSchema } from "./CircuitsFormVariables";
import { getPoiMapPositions, postCircuit, putCircuit } from "../../Services/ServiceCircuits";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "../../Assets/Styles/PointsInteretForm.css";
import CircuitDetailsSection from "./CircuitDetailsSection";
import CircuitDescriptionSection from "./CircuitDescriptionSection";
import CircuitDateSection from "./CircuitDateSection";
import CircuitPoiSection from "./CircuitPoiSection";

function CircuitsForm() {
    const [poiMapPositions, setPoiMapPositions] = useState()
    const languages = ["fr", "en", "es"];
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
            postCircuit(formdata);
        } else {
            console.log("updateID is not undef");
            putCircuit(formdata, updateId);
        }

        navigate("/circuits/liste");
    };

    useEffect (()=> {
        console.log("in useeffect")
        getPoiMapPositions().then((res) => setPoiMapPositions(res));
        
    }, [] )

    return (
            <div className="inner-container">
            {updateId && (
                    <h5 className="page-title"> Modifier le circuit</h5>
                )}
                {!updateId && (
                    <h5 className="page-title"> Créer un circuit</h5>
                )}
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    // validationSchema={validationSchema}
                >
                    {({ values, setFieldValue }) => (
                        <FormikForm>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h6>
                                            Détails du circuit
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <CircuitDetailsSection
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h6>
                                            Description du circuit
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
                                                            <CircuitDescriptionSection
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
                                        <h6 >
                                            Date du circuit
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <CircuitDateSection
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <h6 >
                                            Points d'intérêt du circuit
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                       <CircuitPoiSection
                                            values={values}
                                            setFieldValue={setFieldValue}
                                            poiMapPositions = {poiMapPositions || []}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className="d-flex flex-row justify-content-end mt-3">
                                <Button className="me-3" type="submit">Enregistrer</Button>
                                <Button variant="secondary" onClick={ () => navigate("/circuits/liste")} type="button">
                                    Annuler
                                </Button>
                            </div>
                        </FormikForm>
                    )}
                </Formik>
            </div>
    );
}
//on submit check isRecurrence
//if true, don't submit poiDate.recurrenceOptions
//if false, don't submit poiDate.periodes

export default CircuitsForm;
