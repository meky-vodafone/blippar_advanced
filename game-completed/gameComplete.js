function sendGameCompleteMessageToIframeParent(
  caughtCharacter,
  timeTakenInSeconds
) {
  const message = {
    caughtCharachter: Boolean(caughtCharacter),
    timeTakenInSeconds: Number(timeTakenInSeconds),
  };

  // Send message to parent window
  if (window.parent !== window) {
    window.parent.postMessage(message, "*");
  }
}

function onGameComplete(caughtCharacter, timeTakenInSeconds) {
  //   sendGameCompleteMessageToIframeParent(caughtCharacter, timeTakenInSeconds);
  const baseRedirectionUrl = "https://qa1.vodafone.com.eg/bf/youtubePromo/game-page";
  const finalUrl = `${baseRedirectionUrl}?caughtCharacter=${caughtCharacter},timeTakenInSeconds=${timeTakenInSeconds}`;
  try {
    window.location.replace(finalUrl);
  } catch (error) {
    window.location.reload();
  }
}
