import { Field, FieldArray } from "formik";
import { Button, Form } from "react-bootstrap";


 const OptionsHebdo = () => {
    

return (

    <div className="options-mensu">
                                    
                                    <Form.Group>
                                        Le
                                        <Field
                                            className="form-control input-number mx-3"
                                            type="number"
                                            name="poiDate.recurrenceOptions.frequenceMensu.jour"
                                        />
                                        tous les
                                        <Field
                                            className="form-control input-number mx-3"
                                            type="number"
                                            name="poiDate.recurrenceOptions.frequenceMensu.nbrMois"
                                        />
                                        mois
                                    </Form.Group>


                                    
                                </div>
)}

export default OptionsHebdo