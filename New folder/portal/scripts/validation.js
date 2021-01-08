function validate(data){
    var errors = {
        email:[],
        password:[],
        phone:[],
    }
    // email
    if (!data.email.includes('@') || !data.email.includes(".") || data.email.length<6) 
        errors.email.push('Not a valid email');
    else if ( ( data.email.indexOf('@') > data.email.lastIndexOf('.') ) ||
     ( (data.email.length - data.email.lastIndexOf('.')) < 4 ) )
        errors.email.push('Not a valid email')
    

    // password
    var upper_case = 0, lower_case = 0, symbol = 0;
    for (let i=0;i<data.password.length;i++){
        if (data.password[i].charCodeAt() >= 65 && data.password[i].charCodeAt() <= 90) 
            upper_case = 1;
        else if (data.password[i].charCodeAt() >= 97 && data.password[i].charCodeAt() <= 122)
            lower_case = 1; 
        else symbol = 1;
    }

    if (data.password != data.password_confirm) errors.password[1] = "Passwords do not match"
    else if (data.password.length<6){
        errors.password.push("Password strength: weak")
        errors.password.push("Minimum 6 characters");
    }
    else if ((lower_case && !upper_case && !symbol)){
        errors.password.push("Password strength: weak")
        errors.password.push("try adding uppercase letters and symbols");
    } 
    else if ((lower_case && upper_case && !symbol) || (lower_case && !upper_case && symbol) || (!lower_case && upper_case && symbol) ){
        errors.password.push("Password strength: Average")
        errors.password.push("try adding symbols for a stronger password");
    }
    else if (lower_case && upper_case && symbol){
        errors.password.push("Password strength: Strong")
    }
    else {
        errors.password.push("Password strength: weak")
        errors.password.push("Use symbols/numbers, upprecase and lowercase letters")
    }

    //phone
    if (isNaN(data.phone)) errors.phone.push("Not a valid number")

    return errors
}

module.exports = validate
