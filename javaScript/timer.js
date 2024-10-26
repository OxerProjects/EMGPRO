// Timer

const countdownEl  = document.getElementById('timer')
const startStopBtn = document.getElementById('start')
const resetBtn  = document.getElementById('reset')
const openControls  = document.getElementById('openControls')
const controlsPanel  = document.getElementById('controlPanels')
const exit  = document.getElementById('close')

let time = 600; // the initial time in seconds
let countdownInterval; // the interval ID for the countdown
let isCountingDown = false;

openControls.addEventListener('click', () => {
  controlsPanel.style.display = 'flex'
});

exit.addEventListener('click', () => {
  controlsPanel.style.display = 'none'
  document.getElementById('chanels').className = "chanels-hide";
});

function startCountdown() {
  countdownInterval = setInterval(() => {
    time--;
    if (time < 0) {
      clearInterval(countdownInterval);
      return;
    }
    updateTime();
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown() {
  time = 600;
  updateTime();
  if (isCountingDown) {
    stopCountdown();
    startCountdown();
  }
}
function updateTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  countdownEl.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

startStopBtn.addEventListener('click', () => {
  if (isCountingDown) {
    stopCountdown();
    startStopBtn.innerText = 'התחל';
  } else {
    startCountdown();
    startStopBtn.innerText = 'עצור';
  }
  isCountingDown = !isCountingDown; // toggle the flag
});

resetBtn.addEventListener('click', resetCountdown);

updateTime();
