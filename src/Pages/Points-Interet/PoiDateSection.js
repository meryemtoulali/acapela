import { Field, FieldArray } from "formik";
import { Button, Form } from "react-bootstrap";
import PeriodePicker from "./PeriodePicker";

const PoiDetailsSection = ({ values, setFieldValue }) => {
    return (
        <div className="poiDate">
            <Form.Group>
                <div className="row">
                    <div className="col-12 col-sm-5">
                        Souhaitez-vous définir des périodes libres ou une
                        réccurrence ?
                    </div>
                    <div className="col-12 col-sm-5">
                        <div class="form-check form-check-inline">
                            <Field
                                class="form-check-input"
                                type="radio"
                                name="poiDate.recurrence"
                                value="false"
                            />
                            <label class="form-check-label">
                                Périodes libres
                            </label>
                        </div>

                        <div class="form-check form-check-inline">
                            <Field
                                class="form-check-input"
                                type="radio"
                                name="poiDate.recurrence"
                                value="true"
                            />
                            <label class="form-check-label">Réccurrence</label>
                        </div>
                    </div>
                </div>
            </Form.Group>

            <Form.Group>
                <FieldArray name="poiDate.periodes">
                    {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { poiDate } = values;
                        const { periodes } = poiDate;
                        return (
                            <div className="stubbornbuttons row">
                                {periodes.map((periode, index) => (
                                    <div className="row mb-3" key={index}>
                                        <div className="col-10">
                                            <PeriodePicker
                                                index={index}
                                                poiDate={poiDate}
                                                setFieldValue={setFieldValue}
                                            />
                                        </div>

                                        <div className="col-2">
                                            {index === 0 && (
                                                <Button
                                                    variant="info me-3"
                                                    onClick={() =>
                                                        push({
                                                            dateDebut: "",
                                                            dateFin: "",
                                                        })
                                                    }
                                                >
                                                    +
                                                </Button>
                                            )}

                                            {index !== 0 && (
                                                <Button
                                                    variant="danger"
                                                    onClick={() =>
                                                        remove(index)
                                                    }
                                                >
                                                    -
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    }}
                </FieldArray>
            </Form.Group>
        </div>
    );
};

export default PoiDetailsSection;
