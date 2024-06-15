import { useState } from "react";
import  PersonOutlineSharp from "@mui/icons-material/PersonOutlineSharp";
import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

import LogoutMenu from "./LogoutMenu";


function DashboardAppbar(props) {
    const [openMenu, setOpenMenu] = useState(false) ;

    const closeMenuHandler = () => setOpenMenu(false) ;

    return <AppBar 
        position="fixed"
        elevation={0} 
        sx={{
            bgcolor: "#fff",
            borderBottom: "1px solid grey",
            px:1,
            zIndex: (theme) => theme.zIndex.drawer + 1
        }}>
        <Toolbar variant="dense">
            <IconButton sx={{display: props.mobile ? "none" : "block"}} onClick={props.sideBarAction}>
                {props.isopen ? <Close /> : <Menu />}
            </IconButton>
            <Typography sx={{flexGrow: 1, color: 'blue'}}>SMS</Typography>
            <IconButton edge="end" aria-label="menu" onClick={(e) => setOpenMenu(true)}>
                <PersonOutlineSharp sx={{color: 'primary.main'}} />
            </IconButton>
        </Toolbar>
        <LogoutMenu isopen={openMenu} closeMenuAction={closeMenuHandler} />
    </AppBar>

}

export default DashboardAppbar ;