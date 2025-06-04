const circle = document.querySelector(".progress-ring-circle");
const text = document.getElementById("progress-text");

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

// Add colorful gradient via JS
const svg = document.querySelector("svg");
const gradient = document.createElementNS("http://www.w3.org/2000/svg", "defs");
gradient.innerHTML = `
  <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#00ffe0"/>
    <stop offset="25%" stop-color="#5e00ff"/>
    <stop offset="50%" stop-color="#ff0040"/>
    <stop offset="75%" stop-color="#ffeb00"/>
    <stop offset="100%" stop-color="#00ff80"/>
  </linearGradient>
`;
svg.appendChild(gradient);

// Simulate progress update
let progress = 0;
function setProgress(value) {
  const offset = circumference - (value / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  text.textContent = `${Math.round(value)}%`;
}

// Animate from 0 to 100%
const interval = setInterval(() => {
  if (progress >= 100) {
    clearInterval(interval);
    return;
  }
  progress += 1;
  setProgress(progress);
}, 50);
