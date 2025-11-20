
const logContainer = document.getElementById("logContainer");


function addLog(prefix, msg, color) {
  const entry = document.createElement("div");
  entry.style.color = color || "#00ffcc";
  entry.textContent = `[${prefix}] ${msg}`;
  logContainer.appendChild(entry);
  logContainer.scrollTop = logContainer.scrollHeight;
}






["log", "error"].forEach((type) => {
  const original = console[type];
  console[type] = function (...args) {
    original.apply(console, args);
    addLog(
      type.toUpperCase(),
      args
        .map((a) => (typeof a === "object" ? JSON.stringify(a) : a))
        .join(" "),
      type === "error" ? "#ff5555" : type === "warn" ? "#ffaa00" : "#00ffcc"
    );
  };
});