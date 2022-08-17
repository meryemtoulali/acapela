import { Field, FieldArray } from "formik";
import { Button, Form } from "react-bootstrap";
import {
    FormikSelect,
    FormikTextInput,
    FormikTextArea,
    FormikRadioGroup,
} from "./FormikControls";

const OptionsAnnu = () => {
    return (
        <div className="options-hebdo">
            <Form.Group>
                Tous les
                <Field
                    className="form-control input-number mx-3"
                    type="number"
                    name="poiDate.recurrenceOptions.frequenceAnnu.nbrAns"
                />
                an(s)
            </Form.Group>

            <Form.Group>
                Le
                <Field
                    className="form-control input-number mx-3"
                    type="number"
                    name="poiDate.recurrenceOptions.frequenceAnnu.jour"
                />
                <div className="d-inline-block">
<FormikSelect
                    name="poiDate.recurrenceOptions.frequenceAnnu.mois"
                    label=""
                    options={[
                        "Janvier",
                        "Février",
                        "Mars",
                        "Avril",
                        "Mai",
                        "Juin",
                        "Juillet",
                        "Août",
                        "Septembre",
                        "Octobre",
                        "Novembre",
                        "Décembre",
                    ]}
                />
                </div>
                
            </Form.Group>
        </div>
    );
};

export default OptionsAnnu;
