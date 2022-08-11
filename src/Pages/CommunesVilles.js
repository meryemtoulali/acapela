import React, { Component } from "react";
import { getVilles } from "../Services/ServiceVilles";
import "../Assets/Styles/CommunesVilles.css";
import { Link } from "react-router-dom";
import { deleteVille } from "../Services/ServiceVilles";
import { Form } from "react-bootstrap";

class LocationCard extends Component {
    handleDelete = async () => {
        const id = this.props.id;
        await deleteVille(id);

        //if delete request is OK, gotta delete from local data too?

        this.props.localDelete(id);
    };

    render() {
        return (
            <>
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
                                <button
                                    type="button"
                                    className="mr-2 btn btn-info btn-sm mx-2"
                                >
                                    infos
                                </button>

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
                                    onClick={this.handleDelete}
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
                    <Form.Group>
                        <Form.Label  htmlFor="searchInput">
                            Chercher une commune / ville
                        </Form.Label>
                        <Form.Control 
                            name="searchInput"
                            value={searchInput || ""}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <div
                        className="my-3 p-2"
                        style={{
                            backgroundColor: "rgb(11, 16, 55)",
                            color: "white",
                            borderRadius: "10px",
                        }}
                    >
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
