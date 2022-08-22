import React, { Component } from "react";
import { getCircuit, deleteCircuit } from "../../Services/ServiceCircuits";
import "../../Assets/Styles/CommunesVilles.css";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
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
                    showConfirm={this.state.showConfirm}
                    handleClose={this.handleClose}
                    handleConfirm={() => {
                        this.handleDelete();
                        this.handleClose();
                    }}
                />

                <div className="location-card mb-3 p-2">
                    <div className="row">
                        <div className="col-sm-3">
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
                            <div className="buttons-row">
                                <Link to={`/circuits/form/${this.props.id}`}>
                                    <button
                                        type="button"
                                        className="mr-2 btn btn-info btn-sm mx-2"
                                        style={{ width: "50px" }}
                                    >
                                        <FontAwesomeIcon icon={faPen} inverse />
                                    </button>
                                </Link>

                                <button
                                    type="button"
                                    className="mr-2 btn btn-danger btn-sm mx-2"
                                    onClick={this.handleShow}
                                    style={{ width: "50px" }}
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
        const doGetCircuit = async () => {
            const result = await getCircuit();
            this.setState({ data: result });
        };

        doGetCircuit();
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
            <div className="main-container">
                <div className="inner-container">
                    <fieldset className="fieldset-ville">
                        <div className="fieldset-ville-titre">
                            Moteur de recherche
                        </div>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="searchNom">
                                        Nom du circuit
                                    </Form.Label>
                                    <Form.Control
                                        className="col"
                                        name="searchNom"
                                        value={searchNom || ""}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="searchType">
                                        Type du circuit
                                    </Form.Label>
                                    <Form.Control
                                        className="col"
                                        name="searchType"
                                        value={searchType || ""}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="searchDesc">
                                        Description du circuit
                                    </Form.Label>
                                    <Form.Control
                                        className="col"
                                        name="searchDesc"
                                        value={searchDesc || ""}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="searchPoi">
                                        Nom du point d'intérêt
                                    </Form.Label>
                                    <Form.Control
                                        className="col"
                                        name="searchPoi"
                                        value={searchPoi || ""}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </fieldset>

                    <div className="my-3 p-2 blueTitle">Liste des circuits</div>

                    <div className="my-3"></div>
                    <Link to="/circuits/form">
                        <Button variant="danger">
                            <FontAwesomeIcon icon={faPlus} /> Ajouter un circuit
                        </Button>
                    </Link>

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
            </div>
        );
    }
}

export default CircuitsListe;
