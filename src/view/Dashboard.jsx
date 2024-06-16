import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { CssBaseline, Stack, useMediaQuery } from "@mui/material";

import DashboardAppbar from "components/Dashboard/DashboardAppbar";
import SideBar from "components/Dashboard/SideBar";
import MainBody from "components/Dashboard/MainBody";
import ApiService from "service/apiService";




function Dashboard(){
    const navigate = useNavigate();

    const auth = async () => {
        let status = await ApiService({path:"auth"}) ;
        if(!status.status){
            navigate("/login") ;
        }
    }

    useEffect(() => {
        auth() 
    }, [])

    const handleLogout = async () => {
        await ApiService({path:"logout"}) ;
        navigate("/login") ;
    }


    const mobile = useMediaQuery('(min-width:600px)')
    const [openSideBar, setSideBarOpen] = useState(mobile ? false : true) ;

    return (
        <>
        <Helmet>
            <title>Dashboard | SMS Campaigner</title>
        </Helmet>
        <CssBaseline>
            <DashboardAppbar 
                isopen={openSideBar} 
                sideBarAction={() => setSideBarOpen(!openSideBar)} 
                mobile={mobile}
                handleLogout={handleLogout}
            />
            <Stack direction="row" sx={{bgcolor:"transparent", minHeight:"100vh"}}>
                <SideBar 
                    variant={mobile ? "permanent" : "temporary" }
                    isopen={openSideBar} 
                />
                <MainBody />
            </Stack>
        </CssBaseline>
        </>
    ) ;
}

export default Dashboard ;