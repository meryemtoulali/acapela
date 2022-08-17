import { Field } from "formik";
import { Button, Form } from "react-bootstrap";
import {
    FormikSelect,
    FormikTextInput,
    FormikTextArea,
} from "./FormikControls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const PoiDescriptionSection = ({ values, setFieldValue }) => {
    return (
        <div className="poiDescription">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikTextInput
                        name="poiDescription.nomPoi"
                        label="Nom du point d'intérêt"
                    />
                </div>
            </div>

            <Form.Group>
                <div className="row mb-3 align-items-center">
                    <label
                        className="col-lg-2 col-form-label"
                        htmlFor="poiDescription.description"
                    >
                        Description du point d'intérêt
                    </label>

                    <div className="col-lg-8">
                        <Field
                            as="textarea"
                            className="form-control"
                            name="poiDescription.description"
                        />
                    </div>
                    

                    <div className="col-lg-2 mt-2 mt-lg-0">
                        <Button type="button" variant="secondary" onClick={() => {
                                    setFieldValue("poiDescription.descriptionAudio", values.poiDescription.description)
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
                name="poiDescription.descriptionAudio"
                label="Description audio"
            />

            <div className="row align-items-center">
                <div className="col-lg-6"></div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikSelect
                        name="poiDescription.voix"
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
                        name="poiDescription.dictionnaire"
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
                name="poiDescription.infos"
                label="Informations additionnelles"
            />

            <div className="row align-items-center">
                <div className="col-lg-6">
                    <Form.Group>
                        <div className="row mb-3 align-items-center">
                            <label htmlFor="poiDescription.images">
                                Images
                            </label>

                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    multiple
                                    name="poiDescription.images"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "fichiers.images",
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
                            <label htmlFor="poiDescription.videos">
                                Vidéos
                            </label>

                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    multiple
                                    name="poiDescription.videos"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "fichiers.videos",
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
                            <label htmlFor="poiDescription.audio">Audio</label>

                            <div className="col-lg-8">
                                <Field
                                    className="form-control"
                                    type="file"
                                    multiple
                                    name="poiDescription.audio"
                                    onChange={(event) => {
                                        setFieldValue(
                                            "fichiers.audio",
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
