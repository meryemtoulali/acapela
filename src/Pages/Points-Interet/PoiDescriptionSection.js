import { Field, ErrorMessage } from "formik";
import { Button, Form } from "react-bootstrap";
import {
    FormikSelect,
    FormikTextInput,
    FormikTextArea,
} from "../../Components/FormikControls";
import TextError from "../../Components/TextError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const PoiDescriptionSection = ({ lang, values, setFieldValue }) => {
    return (
        <div className="poiDescription">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikTextInput
                        name={`poiDescription.${lang}.nomPoi`}
                        label="Nom du point d'intérêt"
                    />
                </div>
            </div>

            <Form.Group>
                <div className="row mb-3 align-items-center">
                    <label
                        className="col-lg-2 col-form-label"
                        htmlFor={`poiDescription.${lang}.description`}
                    >
                        Description du point d'intérêt
                    </label>

                    <div className="col-lg-8">
                        <Field
                            as="textarea"
                            className="form-control"
                            name={`poiDescription.${lang}.description`}
                        />
                                            <ErrorMessage name={`poiDescription.${lang}.description`} component={TextError} />

                    </div>
                    

                    <div className="col-lg-2 mt-2 mt-lg-0">
                        <Button type="button" variant="secondary" onClick={() => {
                                    setFieldValue(`poiDescription.${lang}.descriptionAudio`, values.poiDescription[`${lang}`].description)
                                }}>
                            <FontAwesomeIcon
                                icon={faArrowDown}
                                className="me-2"
                                
                            />
                            Duppliquer
                        </Button>
                    </div>
                </div>
            </Form.Group>

            <FormikTextArea
                name={`poiDescription.${lang}.descriptionAudio`}
                label="Description audio"
            />

            <div className="row align-items-center">
                <div className="col-lg-6"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikSelect
                        name={`poiDescription.${lang}.voix`}
                        label="Voix"
                        options={[
                            "Manon-BE22k_NT",
                            "Louise22k_NT",
                            "Alice22k_NT",
                        ]}
                    />
                </div>
                <div className="col-lg-6">
                    <FormikSelect
                        name={`poiDescription.${lang}.dictionnaire`}
                        label="Dictionnaire"
                        options={["Dictionnaire1", "Dictionnaire2"]}
                    />
                </div>
            </div>

            <div className="row mb-3 align-items-center">
                <div className="col-2"></div>
                <div className="col-lg-10 justify-content-center">
                    <Button
                        type="button"
                        className="me-3"
                        style={{ width: "60px" }}
                    >
                        <FontAwesomeIcon icon={faPlay} />
                    </Button>
                    <Button type="button" style={{ width: "60px" }}>
                        <FontAwesomeIcon icon={faPause} />
                    </Button>
                </div>
            </div>

            <FormikTextArea
                name={`poiDescription.${lang}.infos`}
                label="Informations additionnelles"
            />

            <div className="row align-items-center">
                <div className="col-lg-6">
                    <Form.Group>
                        <div className="row mb-3 align-items-center">
                            <label className="col-lg-4" htmlFor={`poiDescription.${lang}.fichiers.images`}>
                                Images
                            </label>

                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    multiple
                                    name="poiDescription.fichiers.images"
                                    onChange={(event) => {
                                        setFieldValue(
                                            `poiDescription.${lang}.fichiers.images`,
                                            event.target.files
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </Form.Group>
                </div>

                <div className="col-lg-6">
                    <Form.Group>
                        <div className="row mb-3 align-items-center">
                            <label className="col-lg-4" htmlFor={`poiDescription.${lang}.fichiers.videos`}>
                                Vidéos
                            </label>

                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    multiple
                                    name="poiDescription.fichiers.videos"
                                    onChange={(event) => {
                                        setFieldValue(
                                            `poiDescription.${lang}.fichiers.videos`,
                                            event.target.files
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </Form.Group>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    <Form.Group>
                        <div className="row mb-3 align-items-center">
                            <label className="col-lg-4" htmlFor={`poiDescription.${lang}.fichiers.audio`}>Audio</label>

                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    multiple
                                    name="poiDescription.fichiers.audio"
                                    onChange={(event) => {
                                        setFieldValue(
                                            `poiDescription.${lang}.fichiers.audio`,
                                            event.target.files
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </Form.Group>
                </div>
            </div>
        </div>
    );
};

export default PoiDescriptionSection;
