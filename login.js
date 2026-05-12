console.log("Script Started");

function userInput(event) {
    console.log("click");
    event.preventDefault();
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

   let name = nameInput.value;
   let pwd = passInput.value;

   console.log(name);
   console.log(pwd);

   alert("Logged in! Redirecting...");
   handleLogin();
   saveInfo();
}

// Function to redirect the user to main page
function handleLogin() {
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

    if (nameInput !== "" && passInput !== "") {
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    } else {
        alert("Please enter username and password!");
    }
}
// Function to save the login info
function saveInfo() {
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

    //Save to local storage
    localStorage.getItem("username", username);
    localStorage.getItem("password", password);

   let submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", saveInfo);
}
