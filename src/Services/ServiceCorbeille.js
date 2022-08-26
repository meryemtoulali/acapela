import {client} from "./client"


export const getCorbeille = async () => {
    const response = await client.get(`/corbeille`);
    return response.data;
};

export const restoreCorbeille = async ({updateId}) => {
    
    await client
        .post(updateId)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
};

