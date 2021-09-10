// ELEMENTS SELRCTION
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    //collect value from inputs
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    //Validate first name
    if(firstNameValue == ""){
        errorMsg(firstName);
    }else{
        successMsg(firstName);
    }
    //Validate last name
    if(lastNameValue == ""){
        errorMsg(lastName);
    }else{
        successMsg(lastName)
    }
    //validate email
    if(emailValue == ""){
        errorMsg(email);
    }else{
        successMsg(email)
    }
    //validate password
    if(passwordValue == ""){
        errorMsg(password);
    }else{
        successMsg(password)
    }

})

//display error message 
function errorMsg(input){
    let inputBox = input.parentElement;
    let errorMsg = inputBox.querySelector("span");
    let icon =inputBox.querySelector("img");
    errorMsg.style.display = "block";
    icon.style.display = "block";
    input.style.borderColor = "red";
    input.style.borderWidth = "2px";
}
//display success message funciton
function successMsg(input){
    let inputBox = input.parentElement;
    let errorMsg = inputBox.querySelector("span");
    let icon =inputBox.querySelector("img");
    errorMsg.style.display = "none";
    icon.style.display = "none";
    input.style.borderColor = "green";
    input.style.borderWidth = "2px";
}
