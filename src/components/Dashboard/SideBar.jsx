import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";



function SideBar(props){
    return <Drawer open={ props.isopen } 
    variant={props.variant}
     sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: 250, boxSizing: 'border-box'
        }
    }}>
        <Toolbar />
        <Box>
        <List>
            <ListItem>
                <ListItemText primary="SMS Campaigner" component="h6" sx={{color: 'red'}}></ListItemText>
            </ListItem>

            <ListItemButton component="a" href="/">
                <ListItemText primary="Dashboard"></ListItemText>
            </ListItemButton>
        </List>
        </Box>
    </Drawer>
}


export default SideBar ;