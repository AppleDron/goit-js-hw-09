import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const reset = document.querySelector('[data-reset]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let userTime;
let IntervalId;
const disableBtn = value => (start.disabled = value);
const disableInput = value => (input.disabled = value);

disableBtn(true);

const fl = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Report.failure(
        'Failure',
        'Please choose a date in the future',
        'Try again'
      );
    }
    disableBtn(false);
    start.addEventListener('click', setTimer);
    reset.addEventListener('click', resetTimer);

    userTime = selectedDates[0];
  },
});

function setTimer() {
  IntervalId = setInterval(() => {
    const currentTime = new Date();
    const deltaDate = userTime - currentTime;
    const timerTime = convertMs(deltaDate);
    const { timerDays, timerHours, timerMinutes, timerSeconds } = timerTime;
    disableInput(true);

    days.textContent = timerDays;
    hours.textContent = timerHours;
    minutes.textContent = timerMinutes;
    seconds.textContent = timerSeconds;

    if (deltaDate < 1000) {
      disableInput(false);
      clearInterval(IntervalId);
      Notiflix.Notify.success('Success');
    }
  }, 1000);
}

function resetTimer() {
  disableInput(false);
  clearInterval(IntervalId);

  days.textContent = '00';
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const timerDays = addLeadingZero(Math.floor(ms / day));
  const timerHours = addLeadingZero(Math.floor((ms % day) / hour));
  const timerMinutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const timerSeconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { timerDays, timerHours, timerMinutes, timerSeconds };
}
