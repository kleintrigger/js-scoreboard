let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeScoreTotal = 0;
let guestScoreTotal = 0;


function homeScorePlusOne() {
   homeScoreTotal+= 1
    homeScore.textContent = homeScoreTotal;
    
}

function homeScorePlusTwo() {
    homeScoreTotal+= 2
    homeScore.textContent = homeScoreTotal;

    
}

function homeScorePlusThree() {
   homeScoreTotal+= 3
    homeScore.textContent = homeScoreTotal;
    
}



function guestScorePlusOne() {
    guestScoreTotal+= 1
    guestScore.textContent = guestScoreTotal;
    
}

function guestScorePlusTwo() {
    guestScoreTotal+= 2
    guestScore.textContent = guestScoreTotal;
    
}

function guestScorePlusThree() {
  guestScoreTotal+= 3
    guestScore.textContent = guestScoreTotal;
    
}


window.guestScorePlusOne= guestScorePlusOne;
window.guestScorePlusTwo = guestScorePlusTwo;
window.guestScorePlusThree = guestScorePlusThree;

window.homeScorePlusOne = homeScorePlusOne;
window.homeScorePlusTwo = homeScorePlusTwo;
window.homeScorePlusThree = homeScorePlusThree;
