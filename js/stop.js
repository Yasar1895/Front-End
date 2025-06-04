let startTime = 0;
let interval;
let running = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  const now = Date.now();
  const elapsed = now - startTime;
  document.getElementById('display').textContent = formatTime(elapsed);

  const hand = document.getElementById('hand');
  const degrees = (elapsed / 1000) * 6 % 360; // 6 deg per sec
  hand.style.transform = `rotate(${degrees}deg)`;
}

function startStop() {
  if (!running) {
    startTime = Date.now() - (window.elapsed || 0);
    interval = setInterval(updateDisplay, 100);
    running = true;
  } else {
    clearInterval(interval);
    window.elapsed = Date.now() - startTime;
    running = false;
  }
}

function reset() {
  clearInterval(interval);
  running = false;
  window.elapsed = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('hand').style.transform = 'rotate(0deg)';
}
