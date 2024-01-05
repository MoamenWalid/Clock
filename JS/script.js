
const body = document.querySelector('body');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const modeSwitch = document.querySelector('.mode-switch');

if (localStorage.getItem('mode') === 'Dark Mode') {
  body.classList.add('dark');
  modeSwitch.textContent = 'Light Mode';
}

function updateTime() {
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hrToDeg = (date.getHours() / 12) * 360;

  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

function toggleMode() {
  body.classList.toggle('dark');
  const isDarkMode = body.classList.contains('dark');
  modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('mode', isDarkMode ? 'Dark Mode' : 'Light Mode');
}

window.addEventListener('load', updateTime);
setInterval(updateTime, 1000);
modeSwitch.addEventListener('click', toggleMode);