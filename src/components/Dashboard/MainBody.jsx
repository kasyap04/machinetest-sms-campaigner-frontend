    import { useState } from "react";
    import styled from "@emotion/styled";
    import { Box, Button, Container, Stack, Typography, FormControl, Snackbar } from "@mui/material";

    import Input from "./Input";
    import ApiService from "service/apiService";
    import { inputValidation, recipientValidation } from "validation/dashbaord" ;



    const StylesLabel = styled(Typography)({
        marginRight: "40px",
        textAlign: "end",
        width: "200px",
    }) ;

    const StylesStack = styled(Stack)({
        justifyContent:"space-between",
        display:"flex",
        flexDirection:" row",
        alignItems: "center",
        direction:"row",
        marginBottom:"30px",
        width:"100%"
    }) ;



    function MainBody(){
        const formField = {
            campaignName: "",
            originator: "",
            recipients: "",
            content: ""
        } ;

        const [formData, setFormData]   = useState(formField) ;
        const [formError, setFormError] = useState(formField) ;

        const handleFormDataChange = (e, field) => {
            let value = e.target.value ;
            setFormData({...formData, [field] : value} ) ;

        }

        const [snackbarMsg, setSnackbarMsg] = useState("") ;

        const handleSnackbarClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            setSnackbarMsg(false);
          };

          const handleFormSubmit = async () => {            
            let [hasError, newErrorData] = inputValidation(formData) ;
            setFormError(newErrorData) ;
            if(hasError) return false ;

            let newForm = {};
            [hasError, newForm] = recipientValidation(formData) ;
            if(hasError){
                newErrorData = {...newErrorData, ...newForm} ;
                setFormError(newErrorData) ;
                return false ;
            }

            let status = await ApiService({
                path: "create-campaign",
                data : newForm
            }) ;
            
            setSnackbarMsg(status.msg)
        }

        return <Container sx={{
            display:"flex",
            justifyContent:"center",
            marginTop:"10%",
            height: "fit-content",
        }}>
            <Stack direction="column" sx={{
                height: "fit-content",
                width: { md: "70%", sm:"100%" },
            }}>
                <FormControl required>
                    <StylesStack>
                        <StylesLabel>Campaign Name:</StylesLabel>
                        <Input
                            value={formData.campaignName}
                            handleFormChange={(e) => handleFormDataChange(e, 'campaignName')}
                            error={formError.campaignName}
                        />
                    </StylesStack>
                    <StylesStack>
                        <StylesLabel>Originator:</StylesLabel>
                        <Input 
                            value={formData.originator}
                            handleFormChange={(e) => handleFormDataChange(e, 'originator')}
                            error={formError.originator}
                        />
                    </StylesStack>
                    <StylesStack>
                        <StylesLabel>Recipients:</StylesLabel>
                        <Input 
                            value={formData.recipients}
                            handleFormChange={(e) => handleFormDataChange(e, 'recipients')}
                            mulitline={true}
                            error={formError.recipients}
                        />
                    </StylesStack>
                    <StylesStack>
                        <StylesLabel>Content:</StylesLabel>
                        <Input
                            value={formData.content}
                            handleFormChange={(e) => handleFormDataChange(e, 'content')}
                            mulitline={true}
                            error={formError.content}
                        />
                    </StylesStack>


                    <Box sx={{
                        display: "flex",
                        justifyContent:"end"
                    }}>
                        <Button sx={{px: 5, textTransform: "capitalize"}} variant="contained"
                        onClick={handleFormSubmit}
                        >Send</Button>
                    </Box>
                </FormControl>
            </Stack>
            <Snackbar 
                open={!!snackbarMsg}
                autoHideDuration={4000}
                message={snackbarMsg}
                onClose={handleSnackbarClose}
            />
        </Container>
    }

    export default MainBody ;