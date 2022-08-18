import { Field } from "formik";
import { Form } from "react-bootstrap";
import { FormikCheckGroup } from "../../Components/FormikControls";

const OptionsHebdo = () => {
    const semaine = [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
    ];

    return (
        <div className="options-hebdo">
            <div className="mb-3">
                <Form.Group>
                    Toutes les
                    <Field
                        className="form-control input-number mx-3"
                        type="number"
                        name="poiDate.recurrenceOptions.frequenceHebdo.nbrSemaines"
                    />
                    semaine(s) le :
                </Form.Group>
            </div>

            <FormikCheckGroup
                name="poiDate.recurrenceOptions.frequenceHebdo.jours"
                label=""
                values={semaine}
                labels={semaine}
                isInline
            />
        </div>
    );
};

export default OptionsHebdo;
