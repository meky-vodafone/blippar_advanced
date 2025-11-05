document.addEventListener("DOMContentLoaded", () => {
  const model = document.querySelector("#armodel");

  model.addEventListener("model-loaded", () => {
    console.log("Model loaded and ready for interaction.");

    // Unified handler function
    const handleInteraction = (event) => {
      event.stopPropagation();
      event.preventDefault();

      console.log("Model Clicked");

      // model.setAttribute("scale", {
      //   x: 0,
      //   y: 0,
      //   z: 0,
      // });
      model.setAttribute("visible", false);

      // Stop Timer
      stopTimer();
      showGameCompletePopup(true);
    };

    // Handle both click and touchstart
    model.addEventListener("click", handleInteraction);
    model.addEventListener("touchstart", handleInteraction);

  });
});



