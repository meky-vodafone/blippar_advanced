// const isProduction = false; // or true in production
// const domain = isProduction ? "https://web.vodafone.com.eg" : "https://test1.vodafone.com.eg";

function onGameComplete(caughtCharacter, timeTakenInSeconds) {
  let domain = location?.origin;
  if (!domain) {
    domain = "https://web.vodafone.com.eg";
  }
  const isBrowserFlowParam = new URLSearchParams(window.location.search).get(
    "isBrowserFlow"
  );
  debugger;
  const flowSegment = isBrowserFlowParam === "true" ? "bf/" : "";

  // Build URL safely
  const finalUrl =
    `${domain}/portal/${flowSegment}youtubePromo/game-page` +
    `?caughtCharacter=${caughtCharacter}` +
    `&timeTakenInSeconds=${timeTakenInSeconds}&yogoId=${currentLevelEncrypted}`;

  // Redirect
  try {
    window.location.replace(finalUrl);
  } catch (error) {
    window.location.reload();
  }
}
