import { useState } from "react";
import  PersonOutlineSharp from "@mui/icons-material/PersonOutlineSharp";
import { Typography, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

import LogoutMenu from "./LogoutMenu";


function DashboardAppbar(props) {
    const [openMenu, setOpenMenu] = useState(false) ;

    const closeMenuHandler = () => setOpenMenu(false); 


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
            <Box sx={{flexGrow: 1}}>
                <img 
                    style={{
                        height:"50px",
                        width: "50px"
                    }}
                    src="src/assets/logo.png"
                />
            </Box>


            <IconButton edge="end" aria-label="menu" onClick={() => setOpenMenu(true)}>
                <PersonOutlineSharp sx={{color: 'primary.main'}} />
            </IconButton>
        </Toolbar>
        <LogoutMenu isopen={openMenu}
            handleLogout={props.handleLogout}
            closeMenuAction={closeMenuHandler} />
    </AppBar>

}

export default DashboardAppbar ;