function showGameCompletePopup(caughtCharacter = false) {

    setTimeout(() => {
        const popup = document.getElementById("game-complete-popup");
        if (!popup) {
            console.warn("Game complete popup element not found.");
        }

        const contentDiv = popup.querySelector(".content");

        if (caughtCharacter) {
            contentDiv.innerHTML += "Congratulations! You caught the character!";
        } else {
            contentDiv.innerHTML += "Time's up! Better luck next time!";
        }
        popup.style.display = "flex";
    }, 1000);

}


document.addEventListener('timerComplete', function (event) {
    // Handle the timer completion here
    console.log('Timer has completed!');
    // Add your logic here for what should happen when timer completes

    showGameCompletePopup()
});