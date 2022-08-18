import { Accordion, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Formik, Form as FormikForm } from "formik";
import { Tabs, Tab } from "react-bootstrap";
import {initialValues, validationSchema} from "./PoiFormVariables"

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


    const onSubmit = (values) => {
        console.log("Form data is: ", values);
    };


    const langValidation = Yup.object({

    })
    langValidation['fr'] = Yup.object({
        nomPoi: Yup.string().required("Obligatoire"),
        description: Yup.string().required("Obligatoire"),
        descriptionAudio: Yup.string().required("Obligatoire"),
        voix: Yup.string().required("Obligatoire"),
        dictionnaire: Yup.string().required("Obligatoire"),
    })

    console.log(langValidation)

    

    return (
        <div className="main-container">
            <div className="inner-container">
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

                            <Button type="submit">Valider</Button>
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
