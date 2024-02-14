function validateForm() {
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if (userName.length < 6) {
        text = "Please enter a valid username";
        error.innerHTML = text;
        return false;
    } else if (email.indexOf("@") == -1 || email.length < 10) {
        text = "Please enter a valid email";
        error.innerHTML = text;
        return false;
    } else if (isNaN(phone) || phone.length < 11) {
        text = "Please enter a valid phone number";
        error.innerHTML = text;
        return false;
    } else if (isNaN(password) || password.length < 8 ) {
        text = " password is too short";
        error.innerHTML = text;
        return false;
     
    } else {
        alert("Done");
        return true;
    }
}