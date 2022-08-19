import axios from "axios";
import {client} from "./client"





export const getPOI = async (props) => {
    let getId = "";
    if(props !== undefined) {getId = "/" + props}
    const response = await client.get(`/poi${getId}`);
    return response.data;
};

export const postPOI = async (props) => {
    const formdata = props.formdata;
    await client
        .post(formdata)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const putPOI = async ({formdata, updateId}) => {
    // do something with updateId here
    await client
        .put(formdata)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deletePOI = async (props) => {
    // const id = props
    // await client
    //     .delete(`/${id}`)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });


        await client
        .delete()  //add more to url later

        .then((response) => {
            console.log(response);
            console.log("success! status is ", response.status);
        })

        .catch((err) => {
            console.log("error caught! ");
            console.log(err);
            console.log("error status : ", err.response.status);
            
        });
};