import { useState } from "react";
import { Helmet } from "react-helmet";
import { CssBaseline, Stack, useMediaQuery } from "@mui/material";


import DashboardAppbar from "components/Dashboard/DashboardAppbar";
import SideBar from "components/Dashboard/SideBar";
import MainBody from "components/Dashboard/MainBody";



function Dashboard(){
    const mobile = useMediaQuery('(min-width:600px)')
    const [openSideBar, setSideBarOpen] = useState(mobile ? false : true) ;

    return (
        <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <CssBaseline>
            <DashboardAppbar 
                isopen={openSideBar} 
                sideBarAction={() => setSideBarOpen(!openSideBar)} 
                mobile={mobile}
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