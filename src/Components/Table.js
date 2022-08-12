import React from "react";
import { useTable } from "react-table";
import "../Assets/Styles/Table.css";

function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                className="table__heading"
                                {...column.getHeaderProps()}
                            >
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr className="table__row" {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td
                                        className="table__content"
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                    
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
