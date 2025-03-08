let timer;
let round = 1;
let startRounds = 1
let minutes = 0;
let seconds = 5;
let running = false;
let startMinutes = 0;
let startSeconds = 1;
let isResting = true;
let restStartMinutes = 0;
let restStartSeconds = 1;
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
    round = 1;
    startRounds = 1
    minutes = 0;
    seconds = 5;
    running = false;
    startMinutes = 0;
    startSeconds = 1;
    isResting = true;
    restStartMinutes = 0;
    restStartSeconds = 1;
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
    if (seconds === 0 && minutes === 0) {
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
    if (seconds === 0) {
        seconds = 60;
        minutes--;
    }
    seconds--;
    document.getElementById('time').innerText = 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}

function sound() {
    audio.play();
}