import React from "react";






const DraggablePoiList = ({ poiList }) => {
    return (
        <div className="card ">
            <div className="card-header text-center">
                Points d'intérêt sélectionnés
            </div>
            <div className="card-body">
                <div className="card-text">
                    {poiList.length > 0 && (
                        <ol type="1">
                            {poiList.map((poi, index) => {
                                return <li key={index}>{poi.nomPoi}</li>;
                            })}
                        </ol>
                    )}
                </div>
            </div>
        </div>
    );
};


export default DraggablePoiList