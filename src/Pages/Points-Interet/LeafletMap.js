import React, { Component } from "react";
import {
    MapContainer,
    Marker,
    TileLayer,
    useMapEvents,
    Popup,
} from "react-leaflet";
import "../../Assets/Styles/LeafletMap.css";
import { useState, useEffect } from "react";


const LeafletMap = ({ inputCoord, setFieldValue }) => {
    const [initialPosition, setInitialPosition] = useState([
        31.791702, -7.09262,
    ]);
    const [selectedPosition, setSelectedPosition] = useState(initialPosition);

    const Markers = () => {
        const map = useMapEvents({
            click(e) {
                setSelectedPosition([e.latlng.lat, e.latlng.lng]);
                console.log(selectedPosition);
                setFieldValue(
                    "poiDetails.coord",
                    `${e.latlng.lat}, ${e.latlng.lng}`
                );
            },
        });

        return selectedPosition ? (
            <Marker
                key={selectedPosition[0]}
                position={selectedPosition}
                interactive={false}
            />
        ) : null;
    };

    return (
        <MapContainer center={selectedPosition || initialPosition} zoom={5}>
            <Markers />
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
        
    );
};
export default LeafletMap;
