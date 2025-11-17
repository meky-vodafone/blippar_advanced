function showErrorPopup(message, buttonText = "OK", onClose = null) {
  const popup = document.getElementById("errorPopup");
  const msg = document.getElementById("errorPopupMessage");
  const btn = document.getElementById("errorPopupButton");

  if (!popup || !msg || !btn) return;

  msg.innerHTML = message;
  btn.textContent = buttonText;

  popup.classList.remove("hide");
  popup.classList.add("show");

  // Remove old listeners to avoid stacking
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);

  newBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    popup.classList.add("hide");
    if (onClose && typeof onClose === "function") onClose();
  });
}
