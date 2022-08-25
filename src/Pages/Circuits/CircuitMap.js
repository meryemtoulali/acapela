import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "../../Assets/Styles/LeafletMap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";

import "leaflet-routing-machine";

const CircuitMap = ({
    push,
    remove,
    poiMapPositions,
    poiCircuit,
    setFieldValue,
}) => {
    const initialPosition = [40, -40];

    const [map, setMap] = useState(null);
    const [routeDistance, setRouteDistance] = useState();
    const [routeTime, setRouteTime] = useState();
    const routingMachineRef = useRef();
    const pluginRef = useRef();

    function convertTime(value) {
        const sec = parseInt(value, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes

        return hours + " h " + minutes + " min "; // Return is HH : MM : SS
    }

    const LeafIcon = L.Icon.extend({
        options: {},
    });
    const blueIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|309ddb&chf=a,s,ee00FFFF",
        }),
        redIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|fd2b2c&chf=a,s,ee00FFFF",
        });

    const createRoutineMachineLayer = (props) => {
        const selectedPts = poiCircuit.map((poi) =>
            L.latLng(poi.coord[0], poi.coord[1])
        );

        const instance = L.Routing.control({
            waypoints: selectedPts,
            lineOptions: {
                styles: [{ color: "#787fd8", weight: 4 }],
            },

            show: true,
            addWaypoints: false,
            routeWhileDragging: false,
            draggableWaypoints: false,
            fitSelectedRoutes: false,
            showAlternatives: false,
            collapsible: true,
            createMarker: function () {
                return null;
            },
            profile: "driving",
        }).on("routesfound", function (e) {
            /* e.routes will be set to the routing alternatives */

            setRouteDistance(e.routes[0].summary.totalDistance);
            setRouteTime(e.routes[0].summary.totalTime);
        });

        return instance;
    };

    const RoutingMachine = createControlComponent(createRoutineMachineLayer);

    useEffect(() => {
        if (!map) return;
        const controlContainer = routingMachineRef.current.onAdd(map);
        pluginRef.current.appendChild(controlContainer);
    }, [map]);

    //console.log("form after push or remove:", poiCircuit);

    return (
        <div className="circuitsmap" style={{ position: "relative" }}>
            <div
                className="route-info-overlay card  m-3"
                style={{
                    position: "absolute",
                    width: 250,
                    top: 5,
                    right: 0,
                    zIndex: 10000,
                }}
            >
                <div className="card-header  text-center">Détails</div>
                <div className="p-2">
                    Distance :{" "}
                    {routeTime && (
                        <span>
                            {Math.floor((routeDistance / 1000) * 10) / 10} Km
                        </span>
                    )}
                    <br />
                    Temps : {routeTime && <span>{convertTime(routeTime)}</span>}
                </div>
            </div>
            <MapContainer
                center={initialPosition}
                zoom={3}
                whenCreated={setMap}
            >
                {poiMapPositions.map((x, index) => {
                    return (
                        <Marker
                            key={index}
                            position={poiMapPositions[index].coords}
                            icon={
                                poiCircuit.filter(
                                    (poi) =>
                                        poi.key === poiMapPositions[index].key
                                ).length === 0
                                    ? blueIcon
                                    : redIcon
                            }
                        >
                            <Popup>
                                <div className="text-center">
                                    {poiMapPositions[index].poi}
                                    <br />

                                    {poiCircuit.filter(
                                        (poi) =>
                                            poi.key ===
                                            poiMapPositions[index].key
                                    ).length === 0 && (
                                        <Button
                                            variant="info"
                                            type="button"
                                            onClick={() => {
                                                push({
                                                    key: poiMapPositions[index]
                                                        .key,
                                                    nomPoi: poiMapPositions[
                                                        index
                                                    ].poi,
                                                    coord: poiMapPositions[
                                                        index
                                                    ].coords,
                                                });
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    )}

                                    {poiCircuit.filter(
                                        (poi) =>
                                            poi.key ===
                                            poiMapPositions[index].key
                                    ).length > 0 && (
                                        <Button
                                            variant="danger"
                                            type="button"
                                            onClick={() => {
                                                let delIndex =
                                                    poiCircuit.findIndex(
                                                        (poi) => {
                                                            return (
                                                                poi.key ===
                                                                poiMapPositions[
                                                                    index
                                                                ].key
                                                            );
                                                        }
                                                    );
                                                remove(delIndex);
                                                console.log(poiCircuit)
                                            
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
                <RoutingMachine ref={routingMachineRef} />
            </MapContainer>{" "}
        </div>

        //     <div style={{ border: "1px solid black" }} ref={pluginRef} />
        // </div>
    );
};
export default CircuitMap;
