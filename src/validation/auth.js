function inputValidation(formData){
    let newErrorData = {}, hasError = false ;

    for(const key in formData){
        if(!formData[key].trim()){
            newErrorData[key] = `Please enter your ${key}`;
            hasError = true ;
        }
    }

    return [hasError, newErrorData] ;
}

export default inputValidation ;