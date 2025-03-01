let timer;
let round = 1;
let minutes = 0;
let seconds = 0;
let running = false;
let startMinutes = 0;
let startSeconds = 0;

function setAndStartTimer(){
    
    startMinutes = document.getElementById('setMinutes').value 
    startSeconds = document.getElementById('setSeconds').value 
    startRounds = document.getElementById('setRounds').value 
}

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

function updateTime() {
    if (minutes === 0 && seconds === 0 && round === 1) {
        alert("Time's up!");
    }
    
    if (seconds === 0 && minutes === 0) {
        minutes = startMinutes;
        seconds = startSeconds;
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
