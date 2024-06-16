import { Box, TextField } from "@mui/material";


function Input(props){
    return <Box >
        <TextField 
            autoComplete="off"
            type={props.type}
            label={props.label}
            value={props.value}
            onChange={(e) => props.changeAction(e)}
            error={!!props.error}
            helperText={props.error}
            size="small"
            sx={{
            borderColor: "#fff",
            mb:4
        }}/>
    </Box>
}

export default Input ;