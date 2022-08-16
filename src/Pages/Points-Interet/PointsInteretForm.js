import { Accordion, Button, Form } from "react-bootstrap";

import { Formik, Form as FormikForm, Field, FieldArray } from "formik";

import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import "../../Assets/Styles/PointsInteretForm.css";
import PoiDetailsSection from "./PoiDetailsSection";
import PoiDescriptionSection from "./PoiDescriptionSection";
import PoiDateSection from "./PoiDateSection"


function PointsInteretForm() {
    const initialValues = {
        dateDebut: "",
        dateFin: "",
        fichiers: {
            imageParDefaut: null,
            videoParDefaut: null,
            images: [],
            videos: [],
            audio: null,
        },
        poiDetails: {
            nomVille: "",
            coord: "",
            score: "",
            type: "",
            services: "",
            //image: null,
            //video: null,
        },
        poiDescription: {
            nomPoi: "",
            description: "",
            descriptionAudio: "",
            voix: "",
            dictionnaire: "",
            infos: "",
            //images: "",
            //videos: "",
            //audio: "",
        },
        poiDate: {
            recurrence: false,
            periodes: [{ dateDebut: "", dateFin: "" }],
        },
    };

    const onSubmit = (values) => {
        console.log("Form data is: ", values);
    };

    return (
        <div className="main-container">
            <div className="inner-container">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                                        < PoiDetailsSection  values={values} setFieldValue={setFieldValue}/>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h6 style={{ color: "red" }}>
                                            Description du point d'intérêt
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    < PoiDescriptionSection  values={values} setFieldValue={setFieldValue}/>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h6 style={{ color: "red" }}>
                                            Date du point d'intérêt
                                        </h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    < PoiDateSection  values={values} setFieldValue={setFieldValue}/>
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
