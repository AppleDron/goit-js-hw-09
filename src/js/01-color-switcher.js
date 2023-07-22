const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let timerId = null;

start.addEventListener('click', addBackgroundColorToBody);
stop.addEventListener('click', stopChangeColor);

const disableBtn = value => (start.disabled = value);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function addBackgroundColorToBody() {
  disableBtn(true);

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  disableBtn(false);
  clearInterval(timerId);
}
