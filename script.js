const frame = document.getElementById("game-frame");
const overlay = document.getElementById("frame-overlay");
const focusButton = document.getElementById("focus-game");
const fullscreenButton = document.getElementById("toggle-fullscreen");

function hideOverlay() {
  if (overlay) {
    overlay.classList.add("hidden");
  }
}

if (frame) {
  frame.addEventListener("load", hideOverlay);
}

if (focusButton && frame) {
  focusButton.addEventListener("click", () => {
    hideOverlay();
    frame.focus();
    frame.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

if (fullscreenButton && frame) {
  fullscreenButton.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
      await frame.requestFullscreen().catch(() => {});
    } else {
      await document.exitFullscreen().catch(() => {});
    }
  });
}
