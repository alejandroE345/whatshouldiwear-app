console.log("Script Started");

// Function to allow the user to log in to their account
function userInput(event) {
    console.log("click");
    event.preventDefault();
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

   let name = nameInput.value;
   let pwd = passInput.value;

   console.log(name);
   console.log(pwd);

   alert("Logged in! Redirecting...")
   redirectUser();
}

// Function to save the login info
function saveInfo() {
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

    //Save to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

   
}
 let submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", saveInfo);

// Function to redirect the user to the app after logging in
function redirectUser() {
    console.log("click");
    //Declaring variables
    let nameInput = document.getElementById("username");
    let passInput = document.getElementById("password");

    let name = emailInput.value;
    let pwd = passInput.value;
    //Checks is the user's login info matches
    if (name == nameInput.value & pwd == passInput.value) {
        window.location.href = "index.html";
    } else {
        alert("Incorrect username or password!");
    } 
    let redirectButton = document.getElementById("login");
    redirectButton.addEventListener("click", redirectUser);
}

function filterOutfits(category) {
    //Get all outfit cards
    let outfitCards = document.getElementsByClassName("outfit-card");

    //Loop through each card
    for (let i = 0; i < outfitCards.length; i++) {
       if (category == "all") {
        outfitCards[i].style.display = "block";
       } else {
        if (outfitCards[i].classList.contains(category)) {
            outfitCards[i].style.display = "block";
        } else {
            outfitCards[i].style.display = "none";
        }
       }
    }

}
    //Adding event listener to the filter buttons
    let allButton = document.getElementById("all-looks");
    allButton.addEventListener("click", function() {
        filterOutfits("all");
    });

    let casualButton = document.getElementById("casual");
    casualButton.addEventListener("click", function(){
        filterOutfits("casual");
    });

    let streetButton = document.getElementById("street");
    streetButton.addEventListener("click", function(){
        filterOutfits("street");
    });

    let y2kButton = document.getElementById("y2k");
    y2kButton.addEventListener("click", function(){
        filterOutfits("y2k");
    });
   