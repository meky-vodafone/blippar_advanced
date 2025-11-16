function resetModelPosition() {
  const resetButton = document.getElementById("resetButton");
  if (!resetButton) {
    console.warn("Reset button not found in the DOM.");
    return;
  }
  resetButton.click();

  // Another Method
  // WEBARSDK.PerformReset();

  // alert("Model position has been reset.");
  // resetButton.style.visibility = 'hidden';
  // setTimeout(() => {
  // }, 1000); // 1 second delay
}

// IOS Fix
// const isIOSDevice = /iphone|ipad|ipod/i.test(navigator.userAgent);
// if (isIOSDevice) {
// ! Reset For Both Android & IOS
document.addEventListener("gameStarted", () => {
  setTimeout(() => {
    resetModelPosition();
  }, 1000);
});
// }
