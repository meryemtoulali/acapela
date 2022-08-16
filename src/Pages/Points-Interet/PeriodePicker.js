import React from "react";
import DatePicker from "react-datepicker";
import { Button, Form } from "react-bootstrap";

function PeriodePicker({ index, periode, poiDate, setFieldValue }) {
    

    return (
        <Form.Group>
            <div className='row'>
                <div className="col-2">
                    <label htmlFor="dateDebut">Date de début</label>
                </div>

                <div className="col-4">
                    <DatePicker
                        className="form-control"
                        selected={poiDate.periodes[index].dateDebut}
                        onChange={(e) =>
                            setFieldValue(
                                `poiDate.periodes[${index}].dateDebut`,
                                e
                            )
                        }
                    />
                </div>
                <div className="col-2">
                    <label htmlFor="dateFin">Date de fin</label>
                </div>
                <div className="col-4">
                    <DatePicker
                        className="form-control"
                        selected={poiDate.periodes[index].dateFin}
                        onChange={(e) =>
                            setFieldValue(
                                `poiDate.periodes[${index}].dateFin`,
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
