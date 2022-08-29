import axios from "axios";



// export const loginUser = async (credentials) => {
//     return axios
//         .post("http://demo5246547.mockable.io/login", JSON.stringify(credentials))
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };


 async function loginUser(credentials) {
    return fetch('http://demo5246547.mockable.io/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


   function logoutUser(){
    sessionStorage.clear()
    console.log("logged out!")
   }   
   
   export {loginUser};
