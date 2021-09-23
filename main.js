let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassNam(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("form"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

/* Now, we're gonna target our form and add the submit event listener */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});

/* Now, we will create a function which will do all sorts of form validation work for us. 
'serial' will target our classes [error class, success and failure icons] 
'message' will print a message inside our .error class.  
id.value.trim() will remove all the extra white spaces from the value which the user inputs. */

let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";

    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}