

function resetModelPosition() {
    const resetButton = document.getElementById('resetButton');
    if (!resetButton) {
        console.warn('Reset button not found in the DOM.');
        return;
    }
    resetButton.click()
    alert("Model position has been reset.");
    // resetButton.style.visibility = 'hidden';
    // setTimeout(() => {
    // }, 1000); // 1 second delay

}

// IOS Fix 
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
if (isIOS) {
    document.addEventListener('gameStarted', () => {
        setTimeout(() => {
            resetModelPosition();
        }, 500);
    })
}