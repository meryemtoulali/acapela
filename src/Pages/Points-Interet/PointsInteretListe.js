import React, { Component } from "react";
import { getPOI, deletePOI } from "../../Services/ServicePoi";
import "../../Assets/Styles/ListePage.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import ConfirmModal from "../../Components/ConfirmModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

class LocationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirm: false,
        };
    }

    handleDelete = async () => {
        const id = this.props.id;
        await deletePOI(id);

        //if delete request is OK, gotta delete from local data too?

        this.props.localDelete(id);
    };

    handleShow = () => this.setState({ showConfirm: true });
    handleClose = () => this.setState({ showConfirm: false });

    render() {
        //let match = useRouteMatch();
        return (
            <>
                <ConfirmModal
                message="Êtes-vous sûr de vouloir supprimer ce point d'intérêt ?"
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
                                {this.props.description}
                                <br />
                                {this.props.type}
                                <br />
                                {this.props.ville}
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="">
                            <Link
                                to={`/points-d-interet/form/${this.props.id}`}
                            >
                                <button
                                    type="button"
                                    className="me-3 btn btn-primary"
                                >
                                    <FontAwesomeIcon icon={faPen} inverse />
                                </button>
                            </Link>

                            <button
                                type="button"
                                className="btn btn-secondary "
                                onClick={this.handleShow}
                            >
                                <FontAwesomeIcon icon={faTrash} inverse />
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class PointsInteretListe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            searchNom: "",
            searchType: "",
            searchDesc: "",
            searchVille: "",
            noResults: false,
        };
    }

    componentDidMount() {
        getPOI().then((res) => this.setState({ data: res }));

    }

    globalSearch = () => {
        let { searchNom, searchType, searchDesc, searchVille, data } =
            this.state;

        let filteredData = data.filter((value) => {
            return (
                value.nom.toLowerCase().includes(searchNom.toLowerCase()) &&
                value.type.toLowerCase().includes(searchType.toLowerCase()) &&
                value.description
                    .toLowerCase()
                    .includes(searchDesc.toLowerCase()) &&
                value.ville.toLowerCase().includes(searchVille.toLowerCase())
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
            (ville) => ville.id !== deleteId
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
            searchVille,
            noResults,
        } = this.state;

        data = filteredData && filteredData.length ? filteredData : data;

        return (
                <div className="inner-container">
                    <h5 className="page-title">
                        Points d'intérêt
                    </h5>
                    <fieldset className="fieldset-recherche">
                        <div className="fieldset-recherche-titre">
                            Moteur de recherche
                        </div>
                        <div className="row mb-sm-3">
                            <div className="col-md-6">
                                <Form.Group>
                                    <div className="row align-items-center">
                                        <Form.Label
                                            className="col-lg-4"
                                            htmlFor="searchNom"
                                        >
                                            Nom du point d'intérêt
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
                                            Type du point d'intérêt
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
                                            Description du point d'intérêt
                                        </Form.Label>
                                        <div className="col-lg-8">
                                            <Form.Control
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
                                    <div className="row align-items-center">
                                        <Form.Label
                                            className="col-lg-4"
                                            htmlFor="searchVille"
                                        >
                                            Nom de la commune/ville
                                        </Form.Label>
                                        <div className="col-lg-8">
                                            <Form.Control
                                                name="searchVille"
                                                value={searchVille || ""}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                    </fieldset>

                    {/* <div className="my-3 p-2 blueTitle">
                        Liste des points d’intérêt
                    </div> */}
                    <div className="d-flex flex-column flex-sm-row justify-content-start">
                        <div className="me-3 mb-3">
                            <Link to="/points-d-interet/form">
                                <Button variant="primary">
                                    <FontAwesomeIcon icon={faPlus} /> Ajouter un
                                    point d'intérêt
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/circuits/form">
                                <Button variant="secondary">Créer un circuit</Button>
                            </Link>
                        </div>
                    </div>

                    {noResults ? (
                        <div className="mt-5">Aucun résultat.</div>
                    ) : (
                        <div className="mt-3">
                            {data.map((POI) => (
                                <LocationCard
                                    key={POI.id}
                                    id={POI.id}
                                    image={POI.image}
                                    nom={POI.nom}
                                    description={POI.description}
                                    type={POI.type}
                                    ville={POI.ville}
                                    localDelete={this.localDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>
        );
    }
}

export default PointsInteretListe;
