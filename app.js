const hour = document.getElementById('hour');
const mintue = document.getElementById('min');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function showCurreentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = hr;
    mintue.textContent = min;
    second.textContent = sec;

    progress.style.width = (sec/60) * 100 + '%'
}

setInterval(showCurreentTime, 1000);