document.addEventListener('gameStarted', () => {
    // alert('game started event received');
    // resetModelPosition();


    // Model Loaded Listener
    const model = document.querySelector("#armodel");
    model.addEventListener("model-loaded", () => {
        console.log("Model loaded and ready for interaction.");

        model.setAttribute("visible", true);
    })
});


function showModelHandler() {
    const minSeconds = 1;
    const maxSeconds = 5;
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
    const model = document.querySelector("#armodel");
    setTimeout(() => {
        if (model) {
            model.setAttribute("visible", true);
        }
    }, randomSeconds * 1000);
}

function resetModelPositionAfterRandomSeconds() {
    const minSeconds = TOTAL_TIME_SECONDS / 2;
    const maxSeconds = TOTAL_TIME_SECONDS;
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
    setTimeout(() => {
        resetModelPosition();
    }, randomSeconds * 1000)
}