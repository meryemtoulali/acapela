import { FieldArray } from "formik";
import { Button, Form } from "react-bootstrap";
import PeriodePicker from "../../Components/PeriodePicker";
import {OptionsHebdo, OptionsMensu, OptionsAnnu} from "./OptionsRecurrence";
import {
    FormikRadioGroup,
} from "../../Components/FormikControls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faTrashCan
} from "@fortawesome/free-solid-svg-icons";


const PoiDetailsSection = ({ values, setFieldValue }) => {
    return (
        <div className="poiDate">
            <div className="row align-items-center">
            <div className="col-lg-6 mb-3">
                    Souhaitez-vous définir des périodes libres ou une
                    réccurrence ?
                </div>

                <div className="col-lg-6 mb-3">
                    <FormikRadioGroup
                        name="poiDate.isRecurrence"
                        values={["false", "true"]}
                        labels={["Périodes libres", "Réccurrence"]}
                        isInline={true}
                    />
                </div>
            </div>

            {values.poiDate.isRecurrence === "false" && (
                <div className="periode-libre-section">
                    <Form.Group>
                        <FieldArray name="poiDate.periodes">
                            {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { poiDate } = values;
                                const { periodes } = poiDate;
                                return (
                                    <div className="stubbornbuttons row mb-3 align-items-center">
                                        {periodes.map((oneperiode, index) => (
                                            <div
                                                className="row mb-3 align-items-center"
                                                key={index}
                                            >
                                                <div className="col-sm-10">
                                                    <PeriodePicker
                                                        index={index}
                                                        dateArray={
                                                            poiDate.periodes
                                                        }
                                                        fieldName="poiDate.periodes"
                                                        setFieldValue={
                                                            setFieldValue
                                                        }
                                                    />
                                                </div>

                                                <div className="col-sm-2 mt-2 mt-sm-0">
                                                    {index === 0 && (
                                                        <Button
                                                            variant="primary"
                                                            type="button"
                                                            onClick={() =>
                                                                push({
                                                                    dateDebut:
                                                                        "",
                                                                    dateFin: "",
                                                                })
                                                            }
                                                        >
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </Button>
                                                    )}

                                                    {index !== 0 && (
                                                        <Button
                                                            variant="secondary"
                                                            type="button"
                                                            onClick={() =>
                                                                remove(index)
                                                            }
                                                        >
                                                            <FontAwesomeIcon icon={faTrashCan} />
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
            )}

            {values.poiDate.isRecurrence === "true" && (
                <div className="recurrence-section">
                    <Form.Group>
                        <FieldArray name="poiDate.periodes">
                            {(fieldArrayProps) => {
                                const { form } = fieldArrayProps;
                                const { values } = form;
                                const { poiDate } = values;
                                return (
                                    <div className="stubbornbuttons row">
                                        <div className="row mb-3">
                                            <div className="col-10">
                                                <PeriodePicker
                                                    index={0}
                                                    dateArray={
                                                        poiDate
                                                            .recurrenceOptions
                                                            .dates
                                                    }
                                                    fieldName="poiDate.recurrenceOptions.dates"
                                                    setFieldValue={
                                                        setFieldValue
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            }}
                        </FieldArray>
                    </Form.Group>

                    <div className="row">
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <FormikRadioGroup
                                name="poiDate.recurrenceOptions.frequenceType"
                                values={[
                                    "Hebdomadaire",
                                    "Mensuelle",
                                    "Annuelle",
                                ]}
                                labels={[
                                    "Hebdomadaire",
                                    "Mensuelle",
                                    "Annuelle",
                                ]}
                            />
                        </div>

                        <div className="col-12 col-sm-8">
                            {values.poiDate.recurrenceOptions.frequenceType ===
                                "Hebdomadaire" && <OptionsHebdo />}

                            {values.poiDate.recurrenceOptions.frequenceType ===
                                "Mensuelle" && <OptionsMensu />}

                            {values.poiDate.recurrenceOptions.frequenceType ===
                                "Annuelle" && <OptionsAnnu />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PoiDetailsSection;

//on submit check isRecurrence
//if true, don't submit poiDate.recurrenceOptions
//if false, don't submit poiDate.periodes
