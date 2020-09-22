
const start = document.getElementById("start").addEventListener("click", handleClickStart);
const stop = document.getElementById("stop").addEventListener("click", handleClickStop);
const reset = document.getElementById("reset").addEventListener("click", handleClickReset);

let startTimestamp = null;
let difference = 0;
let suspended = 0;
let requestAnimationId = null;

function tick() {
    difference = new Date(new Date() - startTimestamp);
    render();
    requestAnimationId = requestAnimationFrame(tick);
}

function handleClickStart() {
    if(startTimestamp) {
        return
    }
    startTimestamp = new Date() - suspended;
    requestAnimationId = requestAnimationFrame(tick);
    
}

function handleClickStop() {
    cancelAnimationFrame(requestAnimationId);
        startTimestamp = null;
        suspended = difference;
}

function handleClickReset() {
    cancelAnimationFrame(requestAnimationId);
    startTimestamp = null;
    difference = 0;
    suspended = 0;
    render();
}

function render() {
    const hundredths = (difference ? Math.floor(difference.getMilliseconds()) : 0).toString().padStart(3, "0");
    const seconds = (difference ? Math.floor(difference.getSeconds()) : 0).toString().padStart(2, "0");
    const minutes = (difference ? Math.floor(difference.getMinutes()) : 0).toString().padStart(2, "0");

    // Render screen (Отрисовка экрана)
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("hundredths").textContent = hundredths;
}








