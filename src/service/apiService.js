import axios from 'axios';

import BASE_URL from "config/config";


async function ApiService({path, data}){
    let result = {} ;

    await axios.post(`${BASE_URL}${path}`, data)
    .then(result => {
        console.log(result);
        result = {
            status : true,
            msg: "Message send"
        } ;
    }).catch(error => {
        result =  {
            status : false,
            msg: "Could not send SMS"
        } ;
    }) ;

    return result ;

}

export default  ApiService ;