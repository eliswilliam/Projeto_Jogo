const fullscreenButton = document.getElementById("toggle-fullscreen");

if (fullscreenButton) {
  fullscreenButton.addEventListener("click", async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen().catch(() => {});
    } else {
      await document.exitFullscreen().catch(() => {});
    }
  });
}
