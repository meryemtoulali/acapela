import React from "react";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

function PeriodePicker({ index, dateArray, fieldName, setFieldValue }) {


    return (
        <Form.Group>
            <div className='row align-items-center'>
                <div className="col-sm-2">
                    <label htmlFor="dateDebut">Date de début</label>
                </div>

                <div className="col-sm-4">
                    <DatePicker
                        className="form-control"
                        selected={dateArray[index].dateDebut}
                        onChange={(e) =>
                            setFieldValue(
                                `${fieldName}[${index}].dateDebut`,
                                e
                            )
                        }
                    />
                </div>
                <div className="col-sm-2">
                    <label htmlFor="dateFin">Date de fin</label>
                </div>
                <div className="col-sm-4">
                    <DatePicker
                        className="form-control"
                        selected={dateArray[index].dateFin}
                        onChange={(e) =>
                            setFieldValue(
                                `${fieldName}[${index}].dateFin`,
                                e
                            )
                        }
                    />
                </div>
            </div>

            
        </Form.Group>
    );
}
    




export default PeriodePicker;
