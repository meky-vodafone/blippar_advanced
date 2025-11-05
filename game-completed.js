function showGameCompletePopup(caughtCharacter = false) {
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
}
showGameCompletePopup()