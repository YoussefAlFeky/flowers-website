function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if  (email.indexOf("@") == -1 || email.length < 10) {
        text = "Please enter a valid email";
        error.innerHTML = text;
        return false;
    } 
     else if (isNaN(password) || password.length < 8) {
        text = " password is too short";
        error.innerHTML = text;
        return false;
    } else {
        alert("Done");
        return true;
    }
}