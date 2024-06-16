import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Snackbar, Typography } from "@mui/material";

import ApiService from "service/apiService";
import Input from "components/Auth/Input";
import inputValidation from "validation/auth" ;



function MainBody(){
    const navigate = useNavigate();

    const formData = {
        username: "",
        password: ""
    } ;

    const [loginData, setLoginData] = useState(formData) ;
    const [formError, setFormError] = useState(formData) ;
    const [snackbarMsg, setSnackbarMsg] = useState("") ;

    const handleFormChange = (e, field) => {
        setLoginData({...loginData, [field] : e.target.value}) ;
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarMsg(false);
      };

    const handleFormSubmit = async (e) => {
        e.preventDefault(); 
        
        const [hasError, newFormError] = inputValidation(loginData) ;
        setFormError(newFormError) ;
        if(hasError) return false ;
        
        let status = await ApiService({
            path: "login",
            data : loginData
        }) ;

        if(status.status){
            navigate("/") ;
        }

        setSnackbarMsg(status.msg) ;

    }

    return <><Box 
        component='form'
        onSubmit={handleFormSubmit}
        sx={{
        boxShadow: "0px 0px 8px 2px grey",
        p: 2,
        borderRadius: '8px',
        textAlign: 'center'
    }}
    >
        <Typography variant="h6" sx={{pb: 4}}>Login to SMS Campaigner</Typography>

        <Input
            value={loginData.username}
            label="username"
            type="text"
            changeAction={(e) => handleFormChange(e, 'username')}
            error={formError.username}
        />

        <Input
            value={loginData.password}
            label="password"
            type="password"
            changeAction={(e) => handleFormChange(e, 'password')}
            error={formError.password}
        />     
        <Button type="submit" variant="contained" fullWidth>Login</Button>     
    </Box>
    <Snackbar 
        open={!!snackbarMsg}
        autoHideDuration={4000}
        message={snackbarMsg}
        onClose={handleSnackbarClose}
    />
    </>
}


export default MainBody ;