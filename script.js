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
        outfitCards[i].style.display = "none";
       }
    }

}
//Adding event listener to a filter button
    let casualButton = document.getElementById("casual-btn");
    casualButton.addEventListener("click", filterOutfits("casual"));

    let allButton = document.getElementById("all-btn");
    allButton.addEventListener("click", filterOutfits("all"));

    let streetButton = document.getElementById("street");
    streetButton.addEventListener("click", filterOutfits("street"));

    let y2kButton = document.getElementById("y2k");
    y2kButton.addEventListener("click", filterOutfits("y2k"));