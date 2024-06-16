import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container } from "@mui/material";

import MainBody from "components/Auth/MainBody";
import ApiService from "service/apiService";




function Auth(){
    const navigate = useNavigate();

    const auth = async () => {
        let status = await ApiService({path:"auth"}) ;
        console.log(status);
        if(status.status){
            navigate("/")
        }
    }

    useEffect(() => {
        auth()
    }, []) ;
    

    return (<>
        <Helmet>
            <title>Login | SMS Campaigner</title>
        </Helmet>
        <Container sx={{height:"calc(100vh - 18px)", display: 'grid', placeItems: 'center'}}>
            <MainBody />
        </Container>
    </>) ;
}

export default Auth ;