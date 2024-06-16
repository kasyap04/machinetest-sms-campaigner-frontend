import axios from 'axios';

import BASE_URL from "config/config";


async function ApiService({path, data}){
    let apiResult = {} ;


    await axios.post(`${BASE_URL}${path}`, data, {
        withCredentials:true,
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json',
        }
    })
    .then(result => {
        apiResult = result.data ;
    }).catch(error => {
        apiResult =  {
            status : false,
            msg: "Error occured"
        } ;
    }) ;

    return apiResult ;

}

export default  ApiService ;