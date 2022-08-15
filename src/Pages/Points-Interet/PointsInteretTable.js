import React, { Component } from "react";
//import { COLUMNS } from "../Components/COLUMNS";
import Table from "../../Components/Table";
import { getPts, deletePts } from "../../Services/ServiceVilles";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PointsInteretTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            searchInput: "",
        };
    }

    componentDidMount() {
        const doGetPts = async () => {
            const result = await getPts();
            this.setState({ data: result });
        };

        doGetPts();
    }
    globalSearch = () => {
        let { searchInput, data } = this.state;
        let filteredData = data.filter((value) => {
            return (
                value.city.toLowerCase().includes(searchInput.toLowerCase()) ||
                value.country
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                value.postal_code
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

    handleDelete = async (id) => {
        await deletePts(id); //sends api delete request

        const localDelete = (props) => {
            //deletes locally (temp)
            const deleteId = props;

            const newdata = this.state.data.filter(
                (ville) => ville.id !== deleteId
            );
            this.setState({ data: newdata });
        };
        localDelete(id);
    };

    render() {
        let { data, filteredData, searchInput } = this.state;
        const COLUMNS = [
            {
                Header: "Image",
                accessor: "image",
                Cell: (tableProps) => (
                    <img
                        src={tableProps.row.original.image}
                        width={250}
                        alt="city"
                    />
                ),
            },
            {
                Header: "Ville",
                accessor: "city",
            },
            {
                Header: "Pays",
                accessor: "country",
            },
            {
                Header: "Code postal",
                accessor: "postal_code",
            },

            {
                Header: "Gérer",

                Cell: (tableProps) => (
                    <>
                    <Link to={`/modifier-table/${tableProps.row.original.id}`}><Button variant="info" className="mb-2" onClick={() => {}}>
                            Modifier
                        </Button></Link>
                        <br/>
                        <Button
                            variant="danger"
                            onClick={() => {
                                this.handleDelete(tableProps.row.original.id);
                            }}
                        >
                            Supprimer
                        </Button>
                    </>
                ),
            },
        ];

        return (
            <div className="main-container">
                <div className="inner-container">
                    <h4>Points d'intérêt</h4>
                    <br />
                    <span className="search">Rechercher :</span>
                    <input
                        size="large"
                        name="searchInput"
                        value={searchInput || ""}
                        onChange={this.handleChange}
                        label="Search"
                    />
                    <br />
                    <Table
                        columns={COLUMNS}
                        data={
                            filteredData && filteredData.length
                                ? filteredData
                                : data
                        }
                    />
                </div>
            </div>
        );
    }
}

export default PointsInteretTable;
