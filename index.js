

document.getElementById("form-validation").addEventListener("submit",function(event){
    event.preventDefault();
    let userName =document.getElementById("userName").value.trim()
    let email =document.getElementById("email").value
    let password =document.getElementById("password").value
    let ConfirmPassword =document.getElementById("ConfirmPassword").value

    let unameError =document.getElementById("uName-error")
    let emailError =document.getElementById("email-error")
    let passwordError =document.getElementById("password-error")
    let cpasswordError =document.getElementById("missMatch")
    let isValid = true

    let uNamepattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailpattern = /^[a-z0-9.]+@[a-z]{4,}\.[a-z]{2,}$/;

    if(userName ===""){
        unameError.innerText="Name is required";
        isValid = false

    }
    else if( !uNamepattern.test(userName)){
        unameError.innerText="Enter your full name with a space";
        isValid = false
    }
    else if(uNamepattern.test(userName)){
        unameError.innerText="";
        isValid = true
    }

    if(email ===""){
        emailError.innerText="Email is required";
        isValid = false
    }
    else if( !emailpattern.test(email)){
        emailError.innerText= "Email invalid";
        isValid = false
    }
    else if( emailpattern.test(email)){
        emailError.innerText= "";
        isValid = true
    }
    if(password ===""){
        passwordError.innerText="password is required";
        isValid = false
    }
    else if(password.length<=3 || password.length>10){
     
        passwordError.innerText="Enter password between 3 to 10 characters"
        isValid = false
    }
    else if(!(password.length<=3 || password.length>10)){
        passwordError.innerText=""
        isValid = true
    }
    if(ConfirmPassword ===""){
        cpasswordError.innerText="confirm password is required";
        isValid = false
    }
    else if(ConfirmPassword !== password){
        cpasswordError.innerText="password is different";
        isValid = false
    }
    else if(ConfirmPassword === password){
        cpasswordError.innerText="";
        isValid = true
    }

    if(isValid){
        alert(`Hi ${userName},Welcome to our Website`)
    }



})