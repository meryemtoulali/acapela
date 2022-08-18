import { Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import {
    FormikSelect,
    FormikTextInput,
} from "../../Components/FormikControls";
import TextError from "../../Components/TextError";

const PoiDetailsSection = ({ values, setFieldValue }) => {
    return (
        <div className="poiDetails">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikSelect
                        name="poiDetails.nomVille"
                        label="Nom de la ville/commune"
                        options={["San Tropez", "Orlando", "Rabat"]}
                    />
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikTextInput
                        name="poiDetails.coord"
                        label="Coordonnées"
                    />
                </div>
            </div>

            <Form.Group>
                <div className="row mb-3 align-items-center">
                    <label
                        htmlFor="poiDetails.score"
                        className="col-lg-2 col-form-label"
                    >
                        Score : {values.poiDetails.score}
                    </label>
                    <div className="col-lg-4 pt-2">
                        <Field
                            className="form-range"
                            type="range"
                            name="poiDetails.score"
                            min="0"
                            max="5"
                        />
                    </div>
                </div>
            </Form.Group>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikSelect
                        name="poiDetails.type"
                        label="Type du point d'intérêt"
                        options={[
                            "Culturel",
                            "Famille",
                            "Sportif",
                            "Croisière",
                            "Location de bateaux",
                            "Camping-car",
                            "Centre de vacances",
                            "Hôtels",
                        ]}
                    />
                </div>

                <div className="col-lg-6">
                    <FormikSelect
                        name="poiDetails.services"
                        label="Services associés"
                        options={[
                            "Handicap",
                            "Pique-nique",
                            "Toilettes",
                            "Wi-fi",
                            "Boutique d'information touristique",
                            "Restaurants",
                            "Hôtels",
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
                                htmlFor="poiDetails.image"
                            >
                                Image par défaut
                            </label>
                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    name="poiDetails.image"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "fichiers.imageParDefaut",
                                            event.target.files[0]
                                        );
                                    }}
                                />
                                <ErrorMessage name="fichiers.imageParDefaut" component={TextError} />
                            </div>
                        </div>
                    </Form.Group>
                </div>
                <div className="col-lg-6">
                    <Form.Group>
                        <div className="row mb-3 align-items-center">
                            <label
                                className="col-lg-4 col-form-label"
                                htmlFor="poiDetails.video"
                            >
                                Vidéo par défaut
                            </label>

                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    name="poiDetails.video"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "fichiers.videoParDefaut",
                                            event.target.files[0]
                                        );
                                    }}
                                />
                                <ErrorMessage name="fichiers.videoParDefaut" component={TextError} />
                            </div>
                        </div>
                    </Form.Group>
                </div>
            </div>
        </div>
    );
};

export default PoiDetailsSection;
