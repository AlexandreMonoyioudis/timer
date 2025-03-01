let timer;
let hours = 0;
let minutes = 2;
let seconds = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('timer').innerText = '00:00:00';
}

function updateTime() {
    if (seconds === 0) {
        seconds = 60;
        minutes--;
    }
    if (minutes === 0) {
        minutes = 60;
        hours--;
    }

    document.getElementById('timer').innerText = 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);

    
    seconds--;
}
