// Signature widget: simulated running carbon counter, echoing the
// real linked-list carbon calculator project.
const counterEl = document.getElementById('counter');
const statusEl = document.getElementById('status-val');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let value = 0;
const increment = 0.0027; // slow, deliberate tick — not decorative noise
const start = Date.now();

function tick(){
  const elapsedSec = (Date.now() - start) / 1000;
  value = elapsedSec * increment * 10;
  counterEl.textContent = value.toFixed(2);
  statusEl.textContent = 'berjalan';
}

if(!prefersReduced){
  setInterval(tick, 200);
} else {
  counterEl.textContent = '0.00';
  statusEl.textContent = 'statis (reduced motion)';
}