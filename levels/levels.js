const AR_GAME_LEVELS_MAP = {
  le4Z8R8Gw2ek: {
    levelNo: 1,
    modelName: "Giza.glb",
  },
  xNJZ8ftGzgk8: {
    levelNo: 2,
    modelName: "Salum.glb",
  },
  gSlLammkjZFB: {
    levelNo: 3,
    modelName: "AirPort.glb",
  },
  KLGmlcggV76D: {
    levelNo: 4,
    modelName: "Alamein.glb",
  },
  OQNaAL2ht4zy: {
    levelNo: 5,
    modelName: "Dahab.glb",
  },
  ePGAGriUymyB: {
    levelNo: 6,
    modelName: "CairoStadium.glb",
  },
  "7vjOEWbXr0H5": {
    levelNo: 7,
    modelName: "Sharm.glb",
  },
  His2QHzzBmRy: {
    levelNo: 8,
    modelName: "Luxor.glb",
  },
  RPuhhMrFr79y: {
    levelNo: 9,
    modelName: "Alexanderia.glb",
  },
  eLNO5pX7iarb: {
    levelNo: 10,
    modelName: "Damietta.glb",
  },
  YrMfV7ficaHl: {
    levelNo: 11,
    modelName: "Asyut.glb",
  },
  cYsIgdPvQSjc: {
    levelNo: 12,
    modelName: "Minya.glb",
  },
  VeH9OqeJeBsa: {
    levelNo: 13,
    modelName: "Aswan.glb",
  },
  y4JEQYBJCI24: {
    levelNo: 14,
    modelName: "PortSaid.glb",
  },
  ud8oe5vxnQwt: {
    levelNo: 15,
    modelName: "RasSedr.glb",
  },
  bJvRqXrnT69h: {
    levelNo: 16,
    modelName: "Mansoura.glb",
  },
  CeFA0G26FOBp: {
    levelNo: 17,
    modelName: "Menofeya.glb",
  },
  vIH9lJC8pyF9: {
    levelNo: 18,
    modelName: "RasElbar.glb",
  },
  NsTISIdEKAea: {
    levelNo: 19,
    modelName: "AinSokhna.glb",
  },
  "2YzFWMISBDB8": {
    levelNo: 20,
    modelName: "Sohag.glb",
  },
  "7TcKRgzJvaoj": {
    levelNo: 21,
    modelName: "BeniSuef.glb",
  },
  FNvpxDoy0Akq: {
    levelNo: 22,
    modelName: "NewCapital.glb",
  },
  "6vm6Ss9KpLts": {
    levelNo: 23,
    modelName: "Tanta.glb",
  },
  Q8XvyIi4qu3B: {
    levelNo: 24,
    modelName: "Fayum.glb",
  },
  GHezc14FZXLV: {
    levelNo: 25,
    modelName: "KhanElkhalily.glb",
  },
  J2kUunLXwakT: {
    levelNo: 26,
    modelName: "Hurghada.glb",
  },
  IH0RyPuHnnxg: {
    levelNo: 27,
    modelName: "Mahalla.glb",
  },
  VTFfZO5EN5gU: {
    levelNo: 28,
    modelName: "Zagazig.glb",
  },
  rJeRRQLsPuvx: {
    levelNo: 29,
    modelName: "Nuwieba.glb",
  },
  "0068JChFC9BF": {
    levelNo: 30,
    modelName: "Ismalia.glb",
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
