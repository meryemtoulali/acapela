import React, { Component } from "react";
import { getCircuit, deleteCircuit } from "../../Services/ServiceCircuits";
import "../../Assets/Styles/ListePage.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import ConfirmModal from "../../Components/ConfirmModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

class CircuitCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirm: false,
        };
    }

    handleDelete = async () => {
        const id = this.props.id;
        await deleteCircuit(id);

        //if delete request is OK, gotta delete from local data too?

        this.props.localDelete(id);
    };

    handleShow = () => this.setState({ showConfirm: true });
    handleClose = () => this.setState({ showConfirm: false });

    render() {
        return (
            <>
                <ConfirmModal
                    message="Êtes-vous sûr de vouloir supprimer ce circuit ?"
                    confirmButton="Supprimer"
                    showConfirm={this.state.showConfirm}
                    handleClose={this.handleClose}
                    handleConfirm={() => {
                        this.handleDelete();
                        this.handleClose();
                    }}
                />

                <div className="location-card mb-3">
                    <div className="row">
                        <div className="col-sm-3 mb-2">
                            <img
                                className="w-100"
                                src={this.props.image}
                                alt={this.props.nom}
                            />
                        </div>
                        <div className="col-sm-9 mb-3">
                            <h5>{this.props.nom}</h5>
                            <div className="">
                                {this.props.statut}
                                <br />
                                {this.props.auteur}
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex flex-row justify-content-end">
                                <Link to={`/circuits/form/${this.props.id}`}>
                                    <button
                                        type="button"
                                        className="me-3 btn btn-primary "
                                    >
                                        <FontAwesomeIcon icon={faPen} inverse />
                                    </button>
                                </Link>

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={this.handleShow}
                                >
                                    <FontAwesomeIcon icon={faTrash} inverse />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class CircuitsListe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            searchNom: "",
            searchType: "",
            searchDesc: "",
            searchPoi: "",
            noResults: false,
        };
    }

    componentDidMount() {
        getCircuit().then((res) => this.setState({ data: res }));
    }

    globalSearch = () => {
        let { searchNom, searchType, searchDesc, searchPoi, data } = this.state;

        let filteredData = data.filter((value) => {
            return (
                value.descriptionCircuit.fr.nomCircuit
                    .toLowerCase()
                    .includes(searchNom.toLowerCase()) &&
                value.detailsCircuit.typeCircuit
                    .toLowerCase()
                    .includes(searchType.toLowerCase()) &&
                value.descriptionCircuit.fr.description
                    .toLowerCase()
                    .includes(searchDesc.toLowerCase()) &&
                value.poiCircuit[0].nomPoi
                    .toLowerCase()
                    .includes(searchPoi.toLowerCase())
            );
        });

        if (filteredData && filteredData.length) {
            this.setState({ filteredData });
            this.setState({ noResults: false });
        } else {
            this.setState({ noResults: true });
        }
    };

    handleChange = (event) => {
        this.setState(
            {
                ...this.state,
                [event.target.name]: event.target.value,
            },

            () => {
                this.globalSearch();
            }
        );
    };

    localDelete = (props) => {
        const deleteId = props;

        const newdata = this.state.data.filter(
            (circuit) => circuit.id !== deleteId
        );
        this.setState({ data: newdata });
    };

    render() {
        let {
            data,
            filteredData,
            searchNom,
            searchType,
            searchDesc,
            searchPoi,
            noResults,
        } = this.state;

        data = filteredData && filteredData.length ? filteredData : data;

        return (
                <div className="inner-container">
                    <h6 className="page-title">Circuits</h6>
                    <fieldset className="fieldset-recherche">
                        <div className="fieldset-recherche-titre">
                            Moteur de recherche
                        </div>
                        <div className="row mb-sm-3">
                            <div className="col-md-6">
                                <Form.Group>
                                    <div className="row align-items-center">
                                        <Form.Label
                                            htmlFor="searchNom"
                                            className="col-lg-4"
                                        >
                                            Nom du circuit
                                        </Form.Label>
                                        <div className="col-lg-8">
                                            <Form.Control
                                                name="searchNom"
                                                value={searchNom || ""}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>

                            <div className="col-md-6">
                                <Form.Group>
                                    <div className="row align-items-center">
                                        <Form.Label
                                            className="col-lg-4"
                                            htmlFor="searchType"
                                        >
                                            Type du circuit
                                        </Form.Label>
                                        <div className="col-lg-8">
                                            <Form.Control
                                                name="searchType"
                                                value={searchType || ""}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group>
                                    <div className="row ">
                                        <Form.Label
                                            className="col-lg-4"
                                            htmlFor="searchDesc"
                                        >
                                            Description du circuit
                                        </Form.Label>
                                        <div className="col-lg-8">
                                            <Form.Control
                                                className="col"
                                                name="searchDesc"
                                                value={searchDesc || ""}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>

                            <div className="col-md-6">
                                <Form.Group>
                                    {" "}
                                    <div className="row align-items-center">
                                        <Form.Label
                                            className="col-lg-4"
                                            htmlFor="searchPoi"
                                        >
                                            Nom du point d'intérêt
                                        </Form.Label>{" "}
                                        <div className="col-lg-8">
                                            <Form.Control
                                                name="searchPoi"
                                                value={searchPoi || ""}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                    </fieldset>

                    {/* <div className="my-3 p-2 blueTitle">Liste des circuits</div> */}

                    <div className="mb-4">
                        <Link to="/circuits/form">
                            <Button variant="primary">
                                <FontAwesomeIcon icon={faPlus} /> Ajouter un
                                circuit
                            </Button>
                        </Link>
                    </div>

                    {noResults ? (
                        <div className="mt-5">Aucun résultat.</div>
                    ) : (
                        <div className="mt-3">
                            {data.map((circuit) => (
                                <CircuitCard
                                    key={circuit.id}
                                    id={circuit.id}
                                    image={circuit.detailsCircuit.image}
                                    nom={
                                        circuit.descriptionCircuit.fr.nomCircuit
                                    }
                                    statut={circuit.statut}
                                    auteur={circuit.auteur}
                                    localDelete={this.localDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>
        );
    }
}

export default CircuitsListe;
