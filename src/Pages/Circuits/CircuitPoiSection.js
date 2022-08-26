import { Field, FieldArray } from "formik";
import { FormikSelect } from "../../Components/FormikControls";
import CircuitMap from "./CircuitMap";
import "../../Assets/Styles/CircuitsForm.css";
import DraggablePoiList from "./DraggablePoiList";

const CircuitPoiSection = ({ poiMapPositions, values, setFieldValue }) => {
    // const poiMapPositions = [
    //     {
    //         key: "1",
    //         poi: "Point d'intérêt San Tropez",
    //         coords: [35.460669951495305, -82.61718750000001],
    //     },
    //     {
    //         key: "2",
    //         poi: "Point d'intérêt d'Orlando",
    //         coords: [25.799891182088334, -80.85937500000001],
    //     },
    //     {
    //         key: "3",
    //         poi: "Point d'intérêt San Jose",
    //         coords: [35.634976650677324, -5.4766845703125],
    //     },
    //     {
    //         key: "4",
    //         poi: "Point d'intérêt Mountain View",
    //         coords: [40.119040222688795, -77.87109375],
    //     },
    //     {
    //         key: "5",
    //         poi: "POI 02",
    //         coords: [28.13981591275445, -10.579833984375002],
    //     },
    //     {
    //         key: "6",
    //         poi: "Hotel Oumlil",
    //         coords: [34.00813561782873, -6.844648718833924],
    //     },
    // ];

    console.log("poiMapPositions in circuitPoiSection.j is", poiMapPositions);
    return (
        <div className="CircuitDetails">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <FormikSelect
                        name="communeVille"
                        label="Nom de la commune/ville"
                        options={["Rabat", "San Tropez", "Orlando"]}
                    />
                </div>
                <div className="col-lg-6 mb-4">
                    <label className="form-check-label me-3">
                        Circuit fermé
                    </label>
                    <Field
                        className="form-check-input"
                        type="checkbox"
                        name="isFerme"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <FieldArray name="poiCircuit">
                        {(fieldArrayProps) => {
                            const { push, remove, form } = fieldArrayProps;
                            const { values } = form;
                            const { poiCircuit } = values;
                            return (
                                <CircuitMap
                                    poiCircuit={poiCircuit}
                                    poiMapPositions={poiMapPositions}
                                    push={push}
                                    remove={remove}
                                />
                            );
                        }}
                    </FieldArray>
                </div>
                <div className="col-4">
                    <DraggablePoiList
                        poiList={values.poiCircuit}
                        setFieldValue={setFieldValue}
                    />
                </div>
            </div>
        </div>
    );
};

export default CircuitPoiSection;
