var countDownDate = new Date("Feb 05, 2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = now - countDownDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = second;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000);

var seconds = 00;
var tens = 00;
var OutputSeconds = document.getElementById('second');
var OutputTens = document.getElementById('tens');
var ButtonStart = document.getElementById('btn-start');
var ButtonStop = document.getElementById('btn-stop');
var ButtonReset = document.getElementById('btn-reset');
var Interval;

ButtonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

ButtonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

ButtonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
});

function startTime() {
    tens++;
    if (tens <= 9) {
        OutputTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        OutputTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if (seconds > 9) {
        OutputSeconds.innerHTML = seconds;
    }
}