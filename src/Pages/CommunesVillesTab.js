import React, { Component } from "react";
import axios from "axios";
import { COLUMNS } from "../Components/COLUMNS";
import Table from "../Components/Table";
import getCities from "../Services/api";

class CommunesVillesTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
            searchInput: "",
        };
    }

    componentDidMount() {
        const doGetCities = async () => {
            const result = await getCities("http://demo5246547.mockable.io/");
            this.setState({ data: result });
        };

        doGetCities();

        axios
            .post("http://demo5246547.mockable.io/", {
                id: "13",
                image: "https://play-lh.googleusercontent.com/_ATfgR5IQv2JcYauNzhTgntADBECazjfAkHMmq9xDj2Mcwts18TEJ9m3SYUNtdbsxog",
                city: "new",
                country: "new",
                postal_code: "new",
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
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

    render() {
        let { data, filteredData, searchInput } = this.state;

        return (
            <div className="main-container">
                <div className="inner-container">
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

export default CommunesVillesTab;
