import axios from "axios";
import {client} from "./client"


export const getVilles = async () => {
    const response = await client.get();
    return response.data;
};



export const postVille = async (props) => {
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

export const putVille = async (props) => {
    const formdata = props.formdata;
    await client
        .put(formdata)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deleteVille = async (props) => {
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
        .delete()
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

/*
export const postVille =  (props) => {
    const formdata = props.formdata
    const response = await axios
    .post(myurl, {
        id: "13",
        image: "https://play-lh.googleusercontent.com/_ATfgR5IQv2JcYauNzhTgntADBECazjfAkHMmq9xDj2Mcwts18TEJ9m3SYUNtdbsxog",
        city: props.nomVille,
        description: props.description,
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
}
*/


//  for pointsInteretTable.js

export const getPts = async (props) => {
    
    let getId = "";
    if(props !== undefined) {getId = "/" + props}
    const response = await client.get(`/table${getId}`);
    return response.data;
};



export const deletePts = async (props) => {
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
        .delete("/table")
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

export const putPts = async (props) => {
    const formdata = props.formdata;
    await client
        .put("/table", formdata)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
};
