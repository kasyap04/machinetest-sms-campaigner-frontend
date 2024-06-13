import { CssBaseline, Stack } from "@mui/material";

import DashboardAppbar from "components/Dashboard/DashboardAppbar";
import SideBar from "components/Dashboard/SideBar";
import MainBody from "components/Dashboard/MainBody";


function Dashboard(){
    return (
        <CssBaseline>
            <DashboardAppbar />
            <Stack direction="row">
                <SideBar />
                <MainBody />
            </Stack>
        </CssBaseline>
    ) ;
}

export default Dashboard ;