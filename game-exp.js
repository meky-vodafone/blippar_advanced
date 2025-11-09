// alert('game started event received');
// resetModelPosition();


// Model Loaded Listener
const model = document.querySelector("#armodel");
model.addEventListener("model-loaded", () => {
    console.log("Model loaded and ready for interaction.");
    document.addEventListener('gameStarted', () => {
        showModelHandler();
        resetModelPositionAfterRandomSeconds();
    });
})


function showModelHandler() {
    const minSeconds = 3;
    const maxSeconds = 10;
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
    const model = document.querySelector("#armodel");
    setTimeout(() => {
        if (model) {
            alert("Showing Model Now");
            model.setAttribute("visible", true);
        }
    }, randomSeconds * 1000);
}

function resetModelPositionAfterRandomSeconds() {
    const minSeconds = TOTAL_TIME_SECONDS / 2;
    const maxSeconds = TOTAL_TIME_SECONDS;
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
    setTimeout(() => {
        alert("resetting model position now");
        resetModelPosition();
    }, randomSeconds * 1000)
}