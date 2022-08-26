import React, { Component } from "react";
import { getCorbeille, restoreCorbeille } from "../Services/ServiceCorbeille";
import "../Assets/Styles/ListePage.css";
import { Form } from "react-bootstrap";
import ConfirmModal from "../Components/ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";

class LocationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirm: false,
        };
    }

    handleRestore = async () => {
        const id = this.props.id;
        await restoreCorbeille(id);

        //if restore request is OK, gotta delete from local corbeille data?

        this.props.localDelete(id);
    };

    handleShow = () => this.setState({ showConfirm: true });
    handleClose = () => this.setState({ showConfirm: false });

    render() {
        //let match = useRouteMatch();
        return (
            <>
                <ConfirmModal
                    message="Êtes-vous sûr de vouloir restaurer ?"
                    confirmButton='Restaurer'
                    showConfirm={this.state.showConfirm}
                    handleClose={this.handleClose}
                    handleConfirm={() => {
                        this.handleRestore();
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
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.handleShow}
                            >
                                <FontAwesomeIcon
                                    icon={faTrashArrowUp}
                                    inverse
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

class Corbeille extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            searchNom: "",
            searchType: "",
            noResults: false,
        };
    }

    componentDidMount() {
        getCorbeille().then((res) => this.setState({ data: res }));
    }

    globalSearch = () => {
        let { searchNom, searchType, data } = this.state;

        let filteredData = data.filter((value) => {
            return (
                value.nom.toLowerCase().includes(searchNom.toLowerCase()) &&
                value.type.toLowerCase().includes(searchType.toLowerCase())
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
        let { data, filteredData, searchNom, searchType, noResults } =
            this.state;

        data = filteredData && filteredData.length ? filteredData : data;

        return (
            <>
                <div className="inner-container">
                    <h5 className="page-title">Corbeille</h5>
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
                                            Nom
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
                                            Type
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
                    </fieldset>

                    {noResults || data.length === 1 ? (
                        <div className="mt-5">Aucun résultat.</div>
                    ) : (
                        <div className="mt-3">
                            {data.map((element) => (
                                <LocationCard
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    nom={element.nom}
                                    description={element.description}
                                    type={element.type}
                                    localDelete={this.localDelete}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default Corbeille;
