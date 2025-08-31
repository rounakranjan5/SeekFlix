let validateForm=(email,password)=>{
    let emailValid=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)

    let passwordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!emailValid){
        return "Please enter a valid email"
    }

    if(!passwordValid){
        return "Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
    }
    
    return null
}

export default validateForm