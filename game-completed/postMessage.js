function sendGameCompleteMessageToIframeParent(caughtCharacter, timeTakenInSeconds) {
    const message = {
        caughtCharachter: Boolean(caughtCharacter),
        timeTakenInSeconds: Number(timeTakenInSeconds)
    };

    // Send message to parent window
    if (window.parent !== window) {
        window.parent.postMessage(message, '*');
    }
}
