export const COLUMNS = [
    
    {
        Header: "Image",
        accessor: "image",
        Cell: tableProps => (
            <img
              src={tableProps.row.original.image}
              width={250}
              alt='city'
            />
          )
    },
    {
        Header: "Ville",
        accessor: "city",
    },
    {
        Header: "Description",
        accessor: "description",
    },
];