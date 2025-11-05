function showGameCompletePopup(caughtCharacter = false) {
    const popup = document.getElementById("game-complete-popup");
    if (!popup) {
        console.warn("Game complete popup element not found.");
    }


    const contentDiv = popup.querySelector(".content");
    const gameCompeltedBtn = document.getElementById("game-completed-button");
    let redirectionUrl = `https://vf.eg/Ram25?caughtCharachter=false&time=null`;

    if (caughtCharacter) {
        redirectionUrl = `https://vf.eg/Ram25?caughtCharachter=true&time=${TOTAL_TIME_SECONDS - secondsLeft}`;
        contentDiv.innerHTML += "Congratulations!<br> You caught the character!";
        gameCompeltedBtn.innerText = "Claim Your Reward!";
    } else {
        contentDiv.innerHTML += "Time's up! Better luck next time!";
        gameCompeltedBtn.innerText = "Continue";
    }
    popup.style.display = "flex";

    gameCompeltedBtn.href = redirectionUrl;

}


document.addEventListener('timerComplete', function (event) {
    // Handle the timer completion here
    console.log('Timer has completed!');
    // Add your logic here for what should happen when timer completes

    showGameCompletePopup()
});