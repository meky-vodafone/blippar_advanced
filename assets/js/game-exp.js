// alert('game started event received');
// resetModelPosition();

// Model Loaded Listener
const model = document.querySelector("#armodel");

model.addEventListener("model-loaded", () => {
  console.log("Model loaded and ready for interaction.");
  placeModelInRandomPosition();
  document.addEventListener("gameStarted", () => {
    showModelHandler();
    // resetModelPositionAfterRandomSeconds();
  });
});

function showModelHandler() {
  const minSeconds = 0;
  const maxSeconds = 1;
  const randomSeconds =
    Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
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
  const randomSeconds =
    Math.floor(Math.random() * (maxSeconds - minSeconds + 1)) + minSeconds;
  setTimeout(() => {
    // alert("resetting model position now");
    resetModelPosition();
  }, randomSeconds * 1000);
}

function getRandomPositionForModel() {
  if (hasGyroPermission) {
    const randomXcoordinate = getWeightedRandomX();
    return `${randomXcoordinate} 0 -2`;
  } else {
    return `0 0 -2`;
  }
}

function getRandomValue(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

function placeModelInRandomPosition() {
  if (model) {
    const randomPosition = getRandomPositionForModel() || "3 0 -2";
    model.setAttribute("position", "0 0 0");
  }
}

function getWeightedRandomX() {
  const weightedValues = [
    { value: 0, weight: 0.05 },
    { value: 1, weight: 0.025 },
    { value: -1, weight: 0.025 },
    { value: 2, weight: 0.225 },
    { value: -2, weight: 0.225 },
    { value: 3, weight: 0.225 },
    { value: -3, weight: 0.225 },
  ];

  let random = Math.random();
  let sum = 0;

  for (const item of weightedValues) {
    sum += item.weight;
    if (random <= sum) return item.value;
  }
}
