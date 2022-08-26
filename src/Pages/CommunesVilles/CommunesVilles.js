import React, { Component } from "react";
import { getVilles } from "../../Services/ServiceVilles";
import "../../Assets/Styles/ListePage.css";
import { Link } from "react-router-dom";
import { deleteVille } from "../../Services/ServiceVilles";
import { Form } from "react-bootstrap";
import ConfirmModal from "../../Components/ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPen,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

class LocationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirm: false,
        };
    }

    handleDelete = async () => {
        const id = this.props.id;
        await deleteVille(id);

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
                    message="Êtes-vous sûr de vouloir supprimer cette commune/ville ?"
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
                                alt={this.props.city}
                            />
                        </div>
                        <div className="col-sm-9 mb-3">
                            <h5>{this.props.city}</h5>
                            <div className="">{this.props.description}</div>
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <div className="">
                            <Link to={`/details/1`}>
                                <button
                                    type="button"
                                    className="me-3 btn btn-info"
                                >
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        inverse
                                    />
                                </button>
                            </Link>
                        </div>

                        <div className="">
                            <Link to={`/ajouter-ville/${this.props.id}`}>
                                <button
                                    type="button"
                                    className="me-3 btn btn-primary"
                                >
                                    <FontAwesomeIcon icon={faPen} inverse />
                                </button>
                            </Link>
                        </div>

                        <div className="">
                            <button
                                type="button"
                                className="me-3 btn btn-secondary"
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

class CommunesVilles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            searchInput: "",
            noResults: false,
        };
    }

    componentDidMount() {
        getVilles().then((res) => this.setState({ data: res }));
    }

    globalSearch = () => {
        let { searchInput, data } = this.state;
        let filteredData = data.filter((value) => {
            return (
                value.city.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.description
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
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
        this.setState({ searchInput: event.target.value }, () => {
            this.globalSearch();
        });
    };

    localDelete = (props) => {
        const deleteId = props;

        const newdata = this.state.data.filter(
            (ville) => ville.id !== deleteId
        );
        this.setState({ data: newdata });
    };

    render() {
        let { data, filteredData, searchInput, noResults } = this.state;

        data = filteredData && filteredData.length ? filteredData : data;

        return (
                <div className="inner-container">
                    <h5 className="page-title">Communes / Villes</h5>
                    <fieldset className="fieldset-recherche">
                        <div className="fieldset-recherche-titre">
                            Moteur de recherche
                        </div>
                        <Form.Group>
                            <div className="row mb-3 align-items-center">
                                <Form.Label
                                    htmlFor="searchInput"
                                    className="col-lg-4 "
                                >
                                    Chercher une commune/ville :
                                </Form.Label>

                                <div className="col-lg-8">
                                    <Form.Control
                                        className="col"
                                        name="searchInput"
                                        value={searchInput || ""}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </Form.Group>
                    </fieldset>

                    {/* <div className="my-3 p-2 blueTitle">
                        Liste des communes/villes
                    </div> */}

                    <div className="my-3"></div>
                    <Link to="/ajouter-ville">
                        <button className="mr-2 btn btn-primary ">
                            + Ajouter une commune/ville
                        </button>
                    </Link>

                    {noResults ? (
                        <div className="mt-5">Aucun résultat.</div>
                    ) : (
                        <div className="mt-3">
                            {data.map((x) => (
                                <LocationCard
                                    key={x.id}
                                    id={x.id}
                                    image={x.image}
                                    city={x.city}
                                    description={x.description}
                                    localDelete={this.localDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>
        );
    }
}

export default CommunesVilles;
