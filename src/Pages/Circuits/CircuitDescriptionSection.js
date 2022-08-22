import {
    FormikTextInput,
    FormikTextArea,
} from "../../Components/FormikControls";

const CircuitDescriptionSection = ({ lang, values, setFieldValue }) => {
    return (
        <div className="descriptionCircuit">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikTextInput
                        name={`descriptionCircuit.${lang}.nomCircuit`}
                        label="Nom du circuit"
                    />
                </div>
            </div>

            <FormikTextArea
                name={`descriptionCircuit.${lang}.description`}
                label="Description du circuit"
            />

           
        </div>
    );
};

export default CircuitDescriptionSection;
