console.log("Script Started");
//Check if user is logged in
let savedUser = localStorage.getItem("username", name);

if (savedUser == null) {
    window.location.href = "login.html";
} else {
    let welcomeMessage = document.getElementById("welcome");
    if (welcomeMessage) {
        welcomeMessage.innerText = "Welcome, " + savedUser + "!";
    }
}


//Function to show different filters
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
}
    
   