const form = document.querySelector("#contactForm")
const fullName = document.querySelector("#fullName")
const fullNameError = document.querySelector("#fullNameError")
const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subjectError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const message = document.querySelector("#message")
const messageError = document.querySelector("#messageError")
const success = document.querySelector(".success")

function validateForm(){
    event.preventDefault()

    if(fullName.value.trim().length > 5){
        fullNameError.style.display = "none";
    }
    else{
        fullNameError.style.display = "block";
    }
    if(subject.value.trim().length >= 15){
        subjectError.style.display = "none";
    }
    else{
        subjectError.style.display = "block";
    }
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }
    if(message.value.trim().length > 25){
        messageError.style.display = "none"
    }
    else{
        messageError.style.display = "block"
    }
    if(fullName.value.trim().length > 5 && subject.value.trim().length >= 15 && validateEmail(email.value) === true && message.value.trim().length > 25){
        success.style.display = "block"
    }
    else{
        success.style.display = "none"
    }
}


form.addEventListener("submit", validateForm)

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}