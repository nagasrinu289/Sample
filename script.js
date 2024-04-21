const username = document.getElementById('username').value;
const password = document.getElementById("password").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;


function submitForm(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
const password = document.getElementById("password").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;

    if(!validateEmail(email) || !validateUsername(username) || !validatephone(phone) 
    || !validatepassword(password)){
        return 
    }
    const data ={
        'username' : username,
        'email' : email,
        'phone number' : phone
    }
    console.log(data)
}

function validateUsername(username){
    if(username.trim() === ""){
        alert("Invalid username");
        return false
    }
    return true;
}
function validateEmail(email){
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegx.test(email)){
        alert("Invalid Email Format...");
        return false;
    }
    return true;
}

function validatepassword(password){
    if(password.length < 6){
        alert("Password  must be atleast 6 characters long..");
        return false;
    }
    return true;
}

function validatephone(phone){
    const phoneRegx = /^\d{10}$/;
    if(!phoneRegx.test(phone)){
        alert("Phone number must be 10 digits");
        return false;
    }
    return true;
}