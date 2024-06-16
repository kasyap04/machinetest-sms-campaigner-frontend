import { Menu, MenuItem, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";


function LogoutMenu(props){
    return <Menu 
        open={props.isopen}
        onClose={(e) => props.closeMenuAction()}
        sx={{mt: 4}}
        anchorOrigin={{
            vertical: 'top',
            horizontal: "right"
        }}
    >
        <MenuItem>
            <Logout
                sx={{
                    height: 18,
                    mr: 1,
                    color: 'secondary.lightText'
                }}
                ></Logout>
        <Typography variant="button" onClick={props.handleLogout}>Logout</Typography>
        </MenuItem>
    </Menu>
}

export default LogoutMenu ;