import { Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import TextError from "./TextError";

export const FormikTextInput = ({ name, label }) => {
    return (
        <Form.Group>
            <div className="row mb-3 align-items-center">
                <label className="col-lg-4 col-form-label" htmlFor={`${name}`}>
                    {label}
                </label>
                <div className="col-lg-8">
                    <Field as={Form.Control} type="text" name={`${name}`} />
                    <ErrorMessage name={`${name}`} component={TextError} />
                </div>
            </div>
            {/* {Formik.errors.name ? <div>{Formik.errors.name}</div> : null} */}
        </Form.Group>
    );
};

export const FormikSelect = ({ name, label, options }) => {
    return (
        <Form.Group>
            <div className="row mb-3 align-items-center">
                <label className="col-lg-4 col-form-label" htmlFor={`${name}`}>
                    {label}
                </label>

                <div className="col-lg-8">
                    <Field
                        as={Form.Select}
                        className="form-control"
                        name={`${name}`}
                    >
                        <option value="">Sélectionner</option>
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={`${option}`}>
                                    {option}
                                </option>
                            );
                        })}
                    </Field>
                    <ErrorMessage name={`${name}`} component={TextError} />
                </div>
            </div>
        </Form.Group>
    );
};

export const FormikTextArea = ({ name, label }) => {
    return (
        <Form.Group>
            <div className="row mb-3 align-items-center">
                <label className="col-lg-2 col-form-label" htmlFor={`${name}`}>
                    {label}
                </label>

                <div className="col-lg-10">
                    <Field
                        as="textarea"
                        className="form-control"
                        name={`${name}`}
                    />{" "}
                    <ErrorMessage name={`${name}`} component={TextError} />
                </div>
            </div>
        </Form.Group>
    );
};

export const FormikRadioGroup = ({ name, label, values, labels, isInline }) => {
    return (
        <Form.Group>
            {values.map((value, index) => {
                return (
                    <div
                        key={index}
                        className={`form-check form-check${
                            isInline ? "-inline" : ""
                        }`}
                    >
                        <Field
                            className="form-check-input"
                            type="radio"
                            name={`${name}`}
                            value={`${values[index]}`}
                        />
                        <label className="form-check-label">
                            {labels[index]}
                        </label>
                    </div>
                );
            })}
            <ErrorMessage name={`${name}`} component={TextError} />
        </Form.Group>
    );
};

export const FormikCheckGroup = ({ name, label, values, labels, isInline }) => {
    return (
        <Form.Group>
            {values.map((value, index) => {
                return (
                    <div
                        key={index}
                        className={`form-check form-check${
                            isInline ? "-inline" : ""
                        }`}
                    >
                        <Field
                            className="form-check-input"
                            type="checkbox"
                            name={`${name}`}
                            value={`${values[index]}`}
                        />
                        <label className="form-check-label">
                            {labels[index]}
                        </label>
                    </div>
                );
            })}
            <ErrorMessage name={`${name}`} component={TextError} />
        </Form.Group>
    );
};
