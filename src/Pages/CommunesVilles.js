import React, { Component, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table";
import { useTable } from "react-table";
import { COLUMNS } from "../Components/COLUMNS";
import { useState } from "react";

/*
const vCommunesVilles = () => {
    const [cities, setCities] = useState();
    const [loading, setLoading] = useState(true);

    const url = "http://demo5246547.mockable.io/";


    useEffect( () => {

       const doFetch = async (url) => {
            const response = await axios.get(url);
            //console.log(response.data);
            setCities(response.data);

            setLoading(false);
        
    }
       
        

        doFetch(url);

        
    }, [])
    
    
    console.log(cities);

    return(
        <div className="main-container">ok</div>
    )


    
}*/

function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

class CommunesVilles extends Component {
    constructor(props) {
        super(props);

        this.state = { cities: [] };
    }

    componentDidMount() {
        this.doFetch("http://demo5246547.mockable.io/");
    }

    doFetch = async (url) => {
        const response = await axios.get(url);

        this.setState({ cities: response.data });
        console.log(this.state.cities);
    };

    render() {
        return (
            <div className="main-container">
                {" "}
                rendered
                <ReactTable data={this.state.cities} columns={COLUMNS} />
            </div>
        );
    }
}

export default CommunesVilles;
