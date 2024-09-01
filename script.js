let startTime, updatedTime, difference, tInterval;
let running = false;
let hours = 0, minutes = 0, seconds = 0;

function start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((difference / (1000 * 60)) % 60);
    seconds = Math.floor((difference / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('display').innerHTML = hours + ":" + minutes + ":" + seconds;
}

function pause() {
    clearInterval(tInterval);
    running = false;
}

function reset() {
    clearInterval(tInterval);
    running = false;
    hours = minutes = seconds = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    if (running) {
        const lapTime = document.getElementById('display').innerHTML;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        document.getElementById('laps').appendChild(lapItem);
    }
}
