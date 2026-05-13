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

   alert("Logging in...");

   handleLogin();
   saveInfo();
}

// Function to redirect the user to main page
function handleLogin() {
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

    let name = nameInput.value;
    let pwd = passInput.value;

    // Check to see if user entered info
    if (name !== "" && pwd !== "") {
        localStorage.setItem("username", name);
        window.location.href = "index.html";
    } else {
        alert("Please enter username and password!");
    }
}
// Function to save the login info
function saveInfo() {
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

    let name = nameInput.value;
    let pwd = passInput.value;

    //Save to local storage
    localStorage.getItem("username", name);
    localStorage.getItem("password", pwd);

}
