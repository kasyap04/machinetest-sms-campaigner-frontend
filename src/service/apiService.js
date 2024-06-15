import axios from 'axios';

import BASE_URL from "config/config";


async function ApiService({path, data}){
    let apiResult = {} ;

    await axios.post(`${BASE_URL}${path}`, data)
    .then(result => {
        console.log(result);
        apiResult = result.data ;
    }).catch(error => {
        result =  {
            status : false,
            msg: "Could not send SMS"
        } ;
    }) ;

    return apiResult ;

}

export default  ApiService ;