import { Home } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";


function SideBar(){
    return <Box
            sx={{
               boxShadow: "3px 2px 4px 1px grey" ,
               height: "calc(100vh - 50px)",
               width: "200px"
            }}
        >
        <List>
            <ListItem>
                <ListItemText primary="SMS Campaigner" component="h6" sx={{color: 'red'}}></ListItemText>
            </ListItem>

            <ListItemButton component="a" href="/">
                <ListItemText primary="Dashboard"></ListItemText>
            </ListItemButton>
        </List>
    </Box>
}

export default SideBar ;