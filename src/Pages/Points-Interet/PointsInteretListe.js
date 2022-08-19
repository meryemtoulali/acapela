import React, { Component } from "react";
import { getPOI, deletePOI } from "../../Services/ServicePoi";
import "../../Assets/Styles/CommunesVilles.css";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import ConfirmModal from "../../Components/ConfirmModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

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
                                {this.props.description}
                                <br />
                                {this.props.type}
                                <br />
                                {this.props.ville}
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div className="buttons-row">
                                <Link
                                    to={`/points-d-interet/form/${this.props.id}`}
                                >
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
        };
    }

    componentDidMount() {
        const doGetPOI = async () => {
            const result = await getPOI();
            this.setState({ data: result });
        };

        doGetPOI();
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
        this.setState({ filteredData });
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
                                        Nom du point d'intérêt
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
                                        Type du point d'intérêt
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
                                        Description du point d'intérêt
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
                                    <Form.Label htmlFor="searchVille">
                                        Nom de la commune/ville
                                    </Form.Label>
                                    <Form.Control
                                        className="col"
                                        name="searchVille"
                                        value={searchVille || ""}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </fieldset>

                    <div className="my-3 p-2 blueTitle">
                        Liste des points d’intérêt
                    </div>

                    <div className="my-3"></div>
                    <Link to="/points-d-interet/form">
                        <Button variant="danger">
                            + Ajouter un point d'intérêt
                        </Button>
                    </Link>

                    <Button variant="info">Créer un circuit</Button>

                    <div className="mt-5">
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
                </div>
            </div>
        );
    }
}

export default PointsInteretListe;
