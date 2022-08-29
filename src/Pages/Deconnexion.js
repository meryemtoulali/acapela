import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
    // const navigate = useNavigate();
    // useEffect( () => {
    //     console.log("effect of deconnexion")
    //     sessionStorage.clear()
    //     navigate('/')
    // }, [])
    return (
            <div className="inner-container">
                Déconnexion...
            </div>
        );
}

export default Deconnexion;