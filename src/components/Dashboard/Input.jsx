import { Box, TextField } from "@mui/material";




function Input(props){
    return <Box sx={{
        width:"100%"
    }}>
        <TextField
            value={props.value}
            onChange={(e) => props.handleFormChange(e)}
            multiline={props.mulitline}
            error={!!props.error}
            helperText={props.error}
            rows={2}
            size="small"
            sx={{
            borderColor: "#fff",
            width: props.mulitline ? "100%" : { md:"50%", xs:"100%" }
        }}/>
    </Box>
}

export default Input ;