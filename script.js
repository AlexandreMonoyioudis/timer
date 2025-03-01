let timer;
let round = 3;
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
    document.getElementById('time').innerText = '02:00';
}

function updateTime() {
    if (minutes === 0 && seconds === 0 && round === 1) {
    
    }
    
    if (seconds === 0 && minutes === 0) {
        minutes = 2;
        round--;
        document.getElementById('rounds').innerText = round;
    }
    
    if (seconds === 0) {
        seconds = 60;
        minutes--;
    }
    
    seconds--;
    document.getElementById('time').innerText = 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}
