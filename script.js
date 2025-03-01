let timer;
let round = 1;
let minutes = 0;
let seconds = 0;
let running = false;
let startMinutes = 0;
let startSeconds = 0;

function setAndStartTimer() {
    startMinutes = parseInt(document.getElementById('setMinutes').value) || 0;
    startSeconds = parseInt(document.getElementById('setSeconds').value) || 0;
    round = parseInt(document.getElementById('setRounds').value) || 1;
    seconds = startSeconds;
    minutes = startMinutes;
    startTimer();
    document.getElementsByClassName("setTimer")[0].style.visibility = 'hidden'
    document.getElementsByClassName("timer")[0].style.visibility = 'visible'
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
        document.getElementById('rounds').innerText = ''+round;
        document.getElementById('time').innerText = 
            (minutes < 10 ? '0' + minutes : minutes) + ':' + 
            (seconds < 10 ? '0' + seconds : seconds);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}
function endTimer(){
    stopTimer();
    document.getElementsByClassName("setTimer")[0].style.visibility = 'visible';
    document.getElementsByClassName("timer")[0].style.visibility = 'hidden';
}

function updateTime() {
    if (minutes === 0 && seconds === 0 && round === 1) {
        alert("Time's up!");
        endTimer();
    }
    
    if (seconds === 0 && minutes === 0) {
        minutes = startMinutes;
        seconds = startSeconds;
        round--;
        document.getElementById('rounds').innerText = ''+round;
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
