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

        let recipientList = recipients.replace("\n", ",").split(',').map(num => num.trim()) ;
        console.log(recipientList);

        for(const num of recipientList){
            if(num[0] !== "+"){
                return [true, {recipients: "Please check if all numbers starts with country code"}]
            }

            if(num.length < 10){
                return [true, {recipients: "Please enter valid mobile number"}]
            }
        }

        return [false, {...formData, recipients:recipientList}] ;
    }catch(e){
        console.log(e);
        return [true, {recipients: "Invalid format"}] ;
    }
}


export {inputValidation, recipientValidation} ;