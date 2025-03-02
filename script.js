let timer;
let round = 1;
let startRounds = 1
let minutes = 0;
let seconds = 5;
let running = false;
let startMinutes = 0;
let startSeconds = 0;
let isResting = true;
let restStartMinutes = 0;
let restStartSeconds = 0;
let audio = document.getElementById('audioPlayer');

function setAndStartTimer() {
    startMinutes = parseInt(document.getElementById('setMinutes').value) || 0;
    startSeconds = parseInt(document.getElementById('setSeconds').value) || 0;
    restStartMinutes = parseInt(document.getElementById('setRestMinutes').value) || 0;
    restStartSeconds = parseInt(document.getElementById('setRestSeconds').value) || 0;
    round = 1+ (parseInt(document.getElementById('setRounds').value) || 1);
    startRounds = round;
    startTimer();
    document.getElementById("resting").style.visibility = 'hidden';
    document.getElementsByClassName("setTimer")[0].style.visibility = 'hidden';
    document.getElementsByClassName("timer")[0].style.visibility = 'visible';
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 1000);
        document.getElementById('rounds').innerText = 'Get ready';
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
        sound();
        alert('Times up')
        endTimer();
    }
    else if (seconds === 0 && minutes === 0) {
        sound();
        isResting = !isResting;
        if (isResting){
            document.getElementById("resting").style.visibility = 'visible';
            minutes = restStartMinutes;
            seconds = restStartSeconds;
        }
        else{
            document.getElementById("resting").style.visibility = 'hidden';
            minutes = startMinutes;
            seconds = startSeconds;
            round--;
        }
        document.getElementById('rounds').innerText = startRounds-round+'/'+(startRounds-1);
    }
    else if (seconds === 0) {
        seconds = 60;
        minutes--;
    }
    
    document.getElementById('time').innerText = 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
    seconds--;
}

function sound() {
    audio.play();
}