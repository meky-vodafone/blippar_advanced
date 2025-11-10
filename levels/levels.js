const AR_GAME_LEVELS_MAP = {
  le4Z8R8Gw2ek: {
    levelNo: 1,
    modelName: "menofeya.glb",
  },
  xNJZ8ftGzgk8: {
    levelNo: 2,
    modelName: "yougo_1.glb",
  },
  gSlLammkjZFB: {
    levelNo: 3,
    modelName: "menofeya.glb",
  },
  KLGmlcggV76D: {
    levelNo: 4,
    modelName: "menofeya.glb",
  },
  OQNaAL2ht4zy: {
    levelNo: 5,
    modelName: "menofeya.glb",
  },
  ePGAGriUymyB: {
    levelNo: 6,
    modelName: "menofeya.glb",
  },
  "7vjOEWbXr0H5": {
    levelNo: 7,
    modelName: "menofeya.glb",
  },
  His2QHzzBmRy: {
    levelNo: 8,
    modelName: "menofeya.glb",
  },
  RPuhhMrFr79y: {
    levelNo: 9,
    modelName: "menofeya.glb",
  },
  eLNO5pX7iarb: {
    levelNo: 10,
    modelName: "menofeya.glb",
  },
  YrMfV7ficaHl: {
    levelNo: 11,
    modelName: "menofeya.glb",
  },
  cYsIgdPvQSjc: {
    levelNo: 12,
    modelName: "menofeya.glb",
  },
  VeH9OqeJeBsa: {
    levelNo: 13,
    modelName: "menofeya.glb",
  },
  y4JEQYBJCI24: {
    levelNo: 14,
    modelName: "menofeya.glb",
  },
  ud8oe5vxnQwt: {
    levelNo: 15,
    modelName: "menofeya.glb",
  },
  bJvRqXrnT69h: {
    levelNo: 16,
    modelName: "menofeya.glb",
  },
  CeFA0G26FOBp: {
    levelNo: 17,
    modelName: "menofeya.glb",
  },
  vIH9lJC8pyF9: {
    levelNo: 18,
    modelName: "menofeya.glb",
  },
  NsTISIdEKAea: {
    levelNo: 19,
    modelName: "menofeya.glb",
  },
  "2YzFWMISBDB8": {
    levelNo: 20,
    modelName: "menofeya.glb",
  },
  "7TcKRgzJvaoj": {
    levelNo: 21,
    modelName: "menofeya.glb",
  },
  FNvpxDoy0Akq: {
    levelNo: 22,
    modelName: "menofeya.glb",
  },
  "6vm6Ss9KpLts": {
    levelNo: 23,
    modelName: "menofeya.glb",
  },
  Q8XvyIi4qu3B: {
    levelNo: 24,
    modelName: "menofeya.glb",
  },
  GHezc14FZXLV: {
    levelNo: 25,
    modelName: "menofeya.glb",
  },
  J2kUunLXwakT: {
    levelNo: 26,
    modelName: "menofeya.glb",
  },
  IH0RyPuHnnxg: {
    levelNo: 27,
    modelName: "menofeya.glb",
  },
  VTFfZO5EN5gU: {
    levelNo: 28,
    modelName: "menofeya.glb",
  },
  rJeRRQLsPuvx: {
    levelNo: 29,
    modelName: "menofeya.glb",
  },
  "0068JChFC9BF": {
    levelNo: 30,
    modelName: "menofeya.glb",
  },
};
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function setModelPathBasedOnLevel() {
  const levelFromQueryParam = getQueryParam("level");
  const modelName = AR_GAME_LEVELS_MAP[levelFromQueryParam]?.modelName;
  debugger;

  if (!modelName) return;
  const modelPath = `assets/models/${modelName}`;
  const modelElement = document.getElementById("yougo_model");
  if (modelElement) {
    modelElement.setAttribute("src", modelPath);
    console.log("✅ Model loaded:", modelPath);
  } else {
    console.error("❌ Model element not found!");
  }
}

// Initialize when page loads
window.addEventListener("DOMContentLoaded", setModelPathBasedOnLevel);
