const timeOutput = document.querySelector(`.time`);
const secOutput = document.querySelector(`.sec`);
const ampmOutput = document.querySelector(`.ampm`);
const monthOutput = document.querySelector(`.month`);
const dayOfweekOutput = document.querySelector(`.dayOfweek`);
const dayOutput = document.querySelector(`.day`);

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatTime(val) {
    if (val < 10) {
        return "0";
    } else { 
        return "";
    }
}

function clock() {
    const d = new Date();

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();


dayOfweekOutput.innerHTML = weekday[
    d.getDay()
];

monthOutput.innerHTML = monthName[
    d.getMonth()
];

dayOutput.innerHTML = d.getDate()

const time = formatTime(h) + h + ":" + formatTime(m) + m;
const sec = formatTime(s) + s;

const ampm = h >= 12 ? 'PM' : 'AM';

timeOutput.innerHTML = time;
secOutput.innerHTMl = sec;
ampmOutput.innerHtMl = ampm;
}

setInterval(clock, 1000);


