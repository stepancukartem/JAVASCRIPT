let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;

function updateTimer()
{
    seconds++;

    if (seconds === 60)
    {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60)
    {
        minutes = 0;
        hours++;
    }

    let h = hours.toString().padStart(2, "0");
    let m = minutes.toString().padStart(2, "0");
    let s = seconds.toString().padStart(2, "0");

    document.getElementById("timer").textContent =
        `${h}:${m}:${s}`;
}

function startTimer()
{
    if (interval === null)
    {
        interval = setInterval(updateTimer, 1000);
    }
}

function pauseTimer()
{
    clearInterval(interval);
    interval = null;
}

function resetTimer()
{
    clearInterval(interval);
    interval = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer").textContent =
        "00:00:00";
}