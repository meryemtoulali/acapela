import { Field } from "formik";
import { Button, Form } from "react-bootstrap";


const PoiDescriptionSection = ({values, setFieldValue}) => {
    return (
        <div className="poiDescription">
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
                                                    Description du point
                                                    d'intérêt
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

                                            <Form.Group>
                                                <label htmlFor="poiDescription.images">
                                                    Images
                                                </label>
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
                                            </Form.Group>

                                            <Form.Group>
                                                <label htmlFor="poiDescription.videos">
                                                    Vidéos
                                                </label>
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
                                            </Form.Group>

                                            <Form.Group>
                                                <label htmlFor="poiDescription.audio">
                                                    Audio
                                                </label>
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
                                            </Form.Group>
                                            </div>
    )
}

export default PoiDescriptionSection