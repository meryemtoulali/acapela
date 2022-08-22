import { Field } from "formik";
import { Form } from "react-bootstrap";
import { FormikCheckGroup, FormikSelect } from "../../Components/FormikControls";

export const OptionsHebdo = () => {
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
                        name="dateCircuit.recurrenceOptions.frequenceHebdo.nbrSemaines"
                    />
                    semaine(s) le :
                </Form.Group>
            </div>

            <FormikCheckGroup
                name="dateCircuit.recurrenceOptions.frequenceHebdo.jours"
                label=""
                values={semaine}
                labels={semaine}
                isInline
            />
        </div>
    );
};

export const OptionsMensu = () => {
    return (
        <div className="options-mensu">
            <Form.Group>
                Le
                <Field
                    className="form-control input-number mx-3"
                    type="number"
                    name="dateCircuit.recurrenceOptions.frequenceMensu.jour"
                />
                tous les
                <Field
                    className="form-control input-number mx-3"
                    type="number"
                    name="dateCircuit.recurrenceOptions.frequenceMensu.nbrMois"
                />
                mois
            </Form.Group>
        </div>
    );
};


export const OptionsAnnu = () => {
    return (
        <div className="options-hebdo">
            <Form.Group>
                Tous les
                <Field
                    className="form-control input-number mx-3"
                    type="number"
                    name="dateCircuit.recurrenceOptions.frequenceAnnu.nbrAns"
                />
                an(s)
            </Form.Group>

            <Form.Group>
                Le
                <Field
                    className="form-control input-number mx-3"
                    type="number"
                    name="dateCircuit.recurrenceOptions.frequenceAnnu.jour"
                />
                <div className="d-inline-block">
                    <FormikSelect
                        name="dateCircuit.recurrenceOptions.frequenceAnnu.mois"
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
