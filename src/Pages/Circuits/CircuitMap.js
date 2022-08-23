import React from "react";
import {
    MapContainer,
    Marker,
    TileLayer,
    Popup,
} from "react-leaflet";
import "../../Assets/Styles/LeafletMap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const CircuitMap = ({
    push,
    remove,
    poiMapPositions,
    poiCircuit,
    setFieldValue,
}) => {
    const initialPosition = [40, -40];

    //console.log("form after push or remove:", poiCircuit);

    return (
        <MapContainer center={initialPosition} zoom={3}>
            {poiMapPositions.map((x, index) => {
                return (
                    <Marker
                        key={index}
                        position={poiMapPositions[index].coords}
                    >
                        <Popup>
                            <div className="text-center">
                                {poiMapPositions[index].poi}
                                <br />

                                {poiCircuit.filter(
                                    (poi) =>
                                        poi.key === poiMapPositions[index].key
                                ).length === 0 && (
                                    <Button
                                        variant="info"
                                        type="button"
                                        onClick={() => {
                                            push({
                                                key: poiMapPositions[index].key,
                                                nomPoi: poiMapPositions[index]
                                                    .poi,
                                                coord: poiMapPositions[index]
                                                    .coords,
                                            });
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                )}

                                {poiCircuit.filter(
                                    (poi) =>
                                        poi.key === poiMapPositions[index].key
                                ).length > 0 && (
                                    <Button
                                        variant="danger"
                                        type="button"
                                        onClick={() => {
                                            let delIndex = poiCircuit.findIndex(
                                                (poi) => {
                                                    return (
                                                        poi.key ===
                                                        poiMapPositions[index]
                                                            .key
                                                    );
                                                }
                                            );
                                            remove(delIndex);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                );
            })}

            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};
export default CircuitMap;
