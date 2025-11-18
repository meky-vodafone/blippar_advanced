const isProduction = false; // or true in production

function onGameComplete(caughtCharacter, timeTakenInSeconds) {
  const domain = isProduction ? "https://web.vodafone.com.eg" : "https://test1.vodafone.com.eg";

  const isBrowserFlowParam = new URLSearchParams(window.location.search).get('isBrowserFlow');
  debugger
  const flowSegment = isBrowserFlowParam === "true" ? "bf/" : "";

  // Build URL safely
  const finalUrl = `${domain}/portal/${flowSegment}youtubePromo/game-page` +
                   `?caughtCharacter=${caughtCharacter}` +
                   `&timeTakenInSeconds=${timeTakenInSeconds}&yogoId=${currentLevelEncrypted}`;

  // Redirect
  try {
    window.location.replace(finalUrl);
  } catch (error) {
    window.location.reload();
  }
}











// function sendGameCompleteMessageToIframeParent(
//   caughtCharacter,
//   timeTakenInSeconds
// ) {
//   const message = {
//     caughtCharachter: Boolean(caughtCharacter),
//     timeTakenInSeconds: Number(timeTakenInSeconds),
//   };

//   // Send message to parent window
//   if (window.parent !== window) {
//     window.parent.postMessage(message, "*");
//   }
// }

// function onGameComplete(caughtCharacter, timeTakenInSeconds) {
//   //   sendGameCompleteMessageToIframeParent(caughtCharacter, timeTakenInSeconds);
//   const isPortalFlow=location.href.contains("/portal");
  
//   const baseRedirectionUrl = "https://test1.vodafone.com.eg/portal/youtubePromo/game-page";
//   const finalUrl = `${baseRedirectionUrl}?caughtCharacter=${caughtCharacter},timeTakenInSeconds=${timeTakenInSeconds}`;
//   try {
//     window.location.replace(finalUrl);
//   } catch (error) {
//     window.location.reload();
//   }
// }



