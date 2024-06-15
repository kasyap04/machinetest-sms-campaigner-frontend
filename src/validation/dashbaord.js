function inputValidation(formData){
    let newErrorData = {}, hasError = false ;

    for(const key in formData){
        if(!formData[key].trim()){
            newErrorData[key] = "Please fill this field";
            hasError = true ;
        }
    }

    return [hasError, newErrorData] ;
}



function recipientValidation(formData){
    try{
        let recipients = formData.recipients.trim();
        if(recipients[recipients.length - 1] === ","){
            recipients = recipients.substring(0, recipients.length - 1) ;
        }

        let recipientList = recipients.split(',') ;

        for(const num of recipientList){
            if(num.trim()[0] !== "+"){
                return [true, {recipients: "Please check if all numbers starts with country code"}]
            }
        }

        return [false, {...formData, recipients:recipientList}] ;
    }catch(e){
        return [true, {recipients: "Invalid format"}] ;
    }
}


export {inputValidation, recipientValidation} ;