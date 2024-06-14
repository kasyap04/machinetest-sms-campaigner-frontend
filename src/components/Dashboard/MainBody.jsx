import { Box, Button, Container, Stack, Typography } from "@mui/material";

import Input from "./Input";
import styled from "@emotion/styled";

const StylesLabel = styled(Typography)({
    marginRight: "40px",
    textAlign: "end",
    width: "200px",
    // backgroundColor: 'lightgreen'
}) ;

const StylesStack = styled(Stack)({
    // backgroundColor: "lightblue",
    justifyContent:"space-between",
    display:"flex",
    flexDirection:" row",
    alignItems: "center",
    direction:"row",
    marginBottom:"30px",
    width:"100%"
}) ;



function MainBody(){
    return <Container sx={{
        display:"flex",
        justifyContent:"center",
        marginTop:"10%",
        // bgcolor: "lightblue",
        height: "fit-content",
    }}>
        <Stack direction="column" sx={{
            // top:"50%",
            // transform:"translateY(-25%)",
            height: "fit-content",
            width: { md: "70%", sm:"100%" },
            // bgcolor:"lightcoral",
        }}>
            <StylesStack>
                <StylesLabel>Campaign Name:</StylesLabel>
                <Input />
            </StylesStack>
            <StylesStack>
                <StylesLabel>Originator:</StylesLabel>
                <Input />
            </StylesStack>
            <StylesStack>
                <StylesLabel>Recipients:</StylesLabel>
                <Input 
                mulitline={true}
                />
            </StylesStack>
            <StylesStack>
                <StylesLabel>Content:</StylesLabel>
                <Input 
                mulitline={true}
                />
            </StylesStack>
            <Box sx={{
                display: "flex",
                justifyContent:"end"
            }}>
                <Button sx={{px: 5, textTransform: "capitalize"}} variant="contained">Send</Button>
            </Box>
        </Stack>
    </Container>
}

export default MainBody ;