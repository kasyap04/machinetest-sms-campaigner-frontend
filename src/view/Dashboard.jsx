import { CssBaseline, Stack } from "@mui/material";

import DashboardAppbar from "components/Dashboard/DashboardAppbar";
import SideBar from "components/Dashboard/SideBar";
import MainBody from "components/Dashboard/MainBody";
import { Helmet } from "react-helmet";


function Dashboard(){
    return (
        <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <CssBaseline>
            <DashboardAppbar />
            <Stack direction="row" sx={{bgcolor:"transparent", minHeight:"100vh"}}>
                <SideBar />
                <MainBody />
            </Stack>
        </CssBaseline>
        </>
    ) ;
}

export default Dashboard ;