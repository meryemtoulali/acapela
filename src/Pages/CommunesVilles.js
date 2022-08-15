import React, { Component } from "react";
import { getVilles } from "../Services/ServiceVilles";
import "../Assets/Styles/CommunesVilles.css";
import {
    Route,
    Routes,
    Link,
    useRouteMatch,
    BrowserRouter,
} from "react-router-dom";
import { deleteVille } from "../Services/ServiceVilles";
import { Form, Button } from "react-bootstrap";
import ConfirmModal from "../Components/ConfirmModal";

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
                                alt={this.props.city}
                            />
                        </div>
                        <div className="col-sm-9 mb-3">
                            <h5>{this.props.city}</h5>
                            <div className="">{this.props.description}</div>
                        </div>
                        <div className="row">
                            <div className="buttons-row">
                                <Link to={`/details/1`}>
                                    <button
                                        type="button"
                                        className="mr-2 btn btn-info btn-sm mx-2"
                                    >
                                        détails
                                    </button>
                                </Link>

                                <Link to={`/ajouter-ville/${this.props.id}`}>
                                    <button
                                        type="button"
                                        className="mr-2 btn btn-info btn-sm mx-2"
                                    >
                                        modifier
                                    </button>
                                </Link>

                                <button
                                    type="button"
                                    className="mr-2 btn btn-danger btn-sm mx-2"
                                    onClick={this.handleShow}
                                >
                                    supprimer
                                </button>
                            </div>
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
        };
    }

    componentDidMount() {
        const doGetVilles = async () => {
            const result = await getVilles();
            this.setState({ data: result });
        };

        doGetVilles();
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
        this.setState({ filteredData });
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
        let { data, filteredData, searchInput } = this.state;

        data = filteredData && filteredData.length ? filteredData : data;

        return (
            <div className="main-container">
                <div className="inner-container">
                    <fieldset className="fieldset-ville px">
                        <div className="fieldset-ville-titre">
                            Moteur de recherche
                        </div>
                        <Form.Group className="row">
                            <Form.Label htmlFor="searchInput" className="col">
                                Chercher une commune / ville :
                            </Form.Label>
                            <Form.Control
                                className="col"
                                name="searchInput"
                                value={searchInput || ""}
                                onChange={this.handleChange}
                            />
                            <div className="col">
                                {" "}
                                <Button variant="secondary">Chercher</Button>
                            </div>
                        </Form.Group>
                    </fieldset>

                    <div className="my-3 p-2 blueTitle">
                        Liste des communes/villes
                    </div>

                    <div className="my-3"></div>
                    <Link to="/ajouter-ville">
                        <button className="mr-2 btn btn-danger ">
                            + Ajouter une commune/ville
                        </button>
                    </Link>

                    <div className="mt-5">
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
                </div>
            </div>
        );
    }
}

export default CommunesVilles;
