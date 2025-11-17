// alert('game started event received');
// resetModelPosition();


// Model Loaded Listener
const model = document.querySelector("#armodel");

model.addEventListener("model-loaded", () => {
    console.log("Model loaded and ready for interaction.");
    placeModelInRandomPosition();
    document.addEventListener('gameStarted', () => {
        showModelHandler();
        // resetModelPositionAfterRandomSeconds();
    });
})


function showModelHandler() {
    const minSeconds = 0;
    const maxSeconds = 1;
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
    setTimeout(() => {
        if (model) {
            // alert("Showing Model Now");

            model.setAttribute("visible", true);
        }
    }, randomSeconds * 1000);
}

function resetModelPositionAfterRandomSeconds() {
    const minSeconds = TOTAL_TIME_SECONDS / 2;
    const maxSeconds = TOTAL_TIME_SECONDS;
    const randomSeconds = Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
    setTimeout(() => {
        // alert("resetting model position now");
        resetModelPosition();
    }, randomSeconds * 1000)
}



function getRandomPositionForModel() {
    const randomXcoordinate = getRandomValue(-4, 4);
    return `${randomXcoordinate} 0 -2`;
}


function getRandomValue(min, max) {
    return +(Math.random() * (max - min) + min).toFixed(2);
}


function placeModelInRandomPosition(){
    if (model) {
        const randomPosition = getRandomPositionForModel() || '3 0 -2';
        model.setAttribute('position', randomPosition)
    }
}