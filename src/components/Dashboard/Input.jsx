import { Box, TextField } from "@mui/material";




function Input(props){
    return <Box sx={{
        width:"100%"
    }}>
        <TextField
        multiline={props.mulitline}
        rows={2}
        size="small"
        sx={{
        borderColor: "#fff",
        width: props.mulitline ? "100%" : { md:"50%", xs:"100%" }
        }}/>
    </Box>
}

export default Input ;