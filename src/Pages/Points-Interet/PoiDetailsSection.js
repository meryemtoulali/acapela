import { Field } from "formik";
import { Button, Form } from "react-bootstrap";


const PoiDetailsSection = ({values, setFieldValue}) => {
    return (
        <div className="poiDetails">
        
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
                                                    Score :{" "}
                                                    {values.poiDetails.score}
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

                                            <Form.Group>
                                                <label htmlFor="poiDetails.image">
                                                    Image par défaut
                                                </label>
                                                <Field
                                                    className="form-control"
                                                    type="file"
                                                    name="poiDetails.image"
                                                    onChange={(event) => {
                                                        setFieldValue(
                                                            "fichiers.imageParDefaut",
                                                            event.target
                                                                .files[0]
                                                        );
                                                    }}
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <label htmlFor="poiDetails.video">
                                                    Vidéo par défaut
                                                </label>
                                                <Field
                                                    className="form-control"
                                                    type="file"
                                                    name="poiDetails.video"
                                                    onChange={(event) => {
                                                        setFieldValue(
                                                            "fichiers.videoParDefaut",
                                                            event.target
                                                                .files[0]
                                                        );
                                                    }}
                                                />
                                            </Form.Group>
                                            
                                            </div>
    )
}

export default PoiDetailsSection