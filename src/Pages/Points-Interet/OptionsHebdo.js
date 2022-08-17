import { Field, FieldArray } from "formik";
import { Button, Form } from "react-bootstrap";


 const OptionsHebdo = () => {
    const weekCheckboxGroup = () => {
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
            <Form.Group>
                {semaine.map((jour) => (
                    <div className="form-check form-check-inline">
                        <Field
                            className="form-check-input"
                            type="checkbox"
                            name="poiDate.recurrenceOptions.frequenceHebdo.jours"
                            value={`${jour}`}
                        />
                        <label className="form-check-label">{jour}</label>
                    </div>
                ))}
            </Form.Group>
        );
    }

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
                                    
                                    {weekCheckboxGroup()}

                                    
                                </div>
)}

export default OptionsHebdo