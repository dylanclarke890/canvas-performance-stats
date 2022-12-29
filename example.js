let stop = false,
  now,
  lastFrame;
const fpsInterval = 1000 / 60;
let stats;

(function startAnimating() {
  lastFrame = window.performance.now();
  stats = new Stats({
    target: document.body,
    containerElementStyles: {
      position: "absolute",
      left: "calc(50% - 20px)",
      top: "calc(50% - 15px)",
    },
  });
  animate();
})();

function animate(newtime) {
  if (stop) return;
  requestAnimationFrame(animate);
  now = newtime;
  const elapsed = now - lastFrame;
  if (elapsed > fpsInterval) {
    lastFrame = now - (elapsed % fpsInterval);
    stats.update();
  }
}
