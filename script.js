console.log("Script Started");

// Function to allow the user to log in to their account
function userInput(event) {
    console.log("click");
    event.preventDefault();
    let emailInput = document.getElementById("emailaddress");
    let passInput = document.getElementById("password");

   let email = emailInput.value;
   let pwd = passInput.value;

   console.log(email);
   console.log(pwd);
   
   alert("Logged in! Redirecting...")
   redirectUser();
}

// Function to redirect the user to the app after logging in
function redirectUser() {
    console.log("click");
    //Declaring variables
    let emailInput = document.getElementById("emailaddress");
    let passInput = document.getElementById("password");

    let email = emailInput.value;
    let pwd = passInput.value;
    //Checks is the user's login info matches
    if (email == emailInput.value & pwd == passInput.value) {
        window.location.href = "index.html";
    } else {
        alert("Incorrecr username or password!");
    }
    let redirectButton = document.getElementById("login");
    redirectButton.addEventListener("click", redirectUser);
}
