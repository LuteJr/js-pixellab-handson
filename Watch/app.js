const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const analogButton = document.querySelector('.analog-watch');
const digitalButton = document.querySelector('.digital-watch');
const counterButton = document.querySelector('.counter');
const stopWatchButton = document.querySelector('.stop-watch');
const alarmButton = document.querySelector('.alarm-clock');

const analog = document.querySelector('.clock');
const digital = document.querySelector('.digital-clock');
const counter = document.querySelector('.counter-watch');
const stopWatch = document.querySelector('.stop-watch-clock');
const alarm = document.querySelector('.alarm-clock-watch');

const mainTitle = document.querySelector('.main-title');

analogButton.addEventListener('click', () => {
  if (analog.style.display === 'none') {
    mainTitle.innerHTML = 'Analog';
    analog.style.display = 'flex';
    digital.style.display = 'none';
    counter.style.display = 'none';
    stopWatch.style.display = 'none';
    alarm.style.display = 'none';
  }
});

digitalButton.addEventListener('click', () => {
  if (digital.style.display === 'none') {
    mainTitle.innerText = 'Digital';
    digital.style.display = 'grid';
    analog.style.display = 'none';
    counter.style.display = 'none';
    stopWatch.style.display = 'none';
    alarm.style.display = 'none';
  } else {
    digital.style.display = 'none';
  }
});

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let mon = today.getMonth();
  let day = today.getUTCDate();
  let year = today.getFullYear().toString().slice(-2);

  Date.prototype.setUTCDate;

  h = checkTime(h);
  m = checkTime(m);
  mon = checkTime(mon);
  day = checkTime(day);

  document.querySelector('#hhh').innerHTML = h;
  document.querySelector('#mmm').innerHTML = m;
  document.querySelector('#date').innerHTML = `${day}/${mon}/${year}`;

  t = setTimeout(function () {
    startTime();
  }, 500);
}
startTime();
