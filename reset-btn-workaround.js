

function startResetButtonWorkaround() {
    const resetButton = document.getElementById('resetButton');
    if (!resetButton) {
        console.warn('Reset button not found in the DOM.');
        return;
    }


    // resetButton.style.visibility = 'hidden';


    setTimeout(() => {
        resetButton.click()
    }, 1000); // 1 second delay

    resetButton.addEventListener('click', () => {
        console.log('Reset button clicked programmatically.');
    })

}


document.addEventListener('gameStarted', () => {
    alert('game started event received');
    startResetButtonWorkaround();
});