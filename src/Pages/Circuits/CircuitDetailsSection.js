import { Field, ErrorMessage } from "formik";
import { Form, } from "react-bootstrap";
import { FormikSelect, } from "../../Components/FormikControls";
import TextError from "../../Components/TextError";

const CircuitDateSection = ({ values, setFieldValue }) => {

    return (
        <div className="CircuitDetails">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikSelect
                        name="detailsCircuit.modeTransport"
                        label="Mode de transport"
                        options={[
                            "Transport en commun",
                            "Vélo",
                            "Voiture",
                            "Moto",
                            "Bus touristique",
                        ]}
                    />
                </div>
                <div className="col-lg-6">
                    <FormikSelect
                        name="detailsCircuit.typeCircuit"
                        label="Type du circuit"
                        options={[
                            "Religieux",
                            "Gastronomique",
                            "Historique",
                            "Culturel",
                            "Nocturne",
                            "Shopping",
                        ]}
                    />
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    <Form.Group>
                        <div className="row mb-3 align-items-center">
                            <label
                                className="col-lg-4 col-form-label"
                                htmlFor="detailsCircuit.image"
                            >
                                Image
                            </label>
                            <div className="col-lg-8">
                                <input 
                                    className="form-control"
                                    type="file"
                                    name="detailsCircuit.image"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "detailsCircuit.image",
                                            event.target.files[0]
                                        );
                                    }}
                                />
                                <ErrorMessage
                                    name="detailsCircuit.image"
                                    component={TextError}
                                />
                            </div>
                        </div>
                    </Form.Group>
                </div>
            </div>
        </div>
    );
};

export default CircuitDateSection;
