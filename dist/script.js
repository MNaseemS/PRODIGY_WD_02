const timeDisplay = document.getElementsByClassName("timer")[0];
const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];

let isPlay = false;
let startTime = 0;
let elapseTime = 0;
let currentTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let intervalID;

const reset = () => {};

playButton.addEventListener("click", () => {
	if (!isPlay) {
        playButton.innerHTML = "Pause";
        isPlay = true;
        startTime = Date.now() - elapseTime;
		intervalID = setInterval(updateTime, 75)
    } else {
        playButton.innerHTML = "Play";
        isPlay = false;
    }
});
resetButton.addEventListener("click", reset);

function updateTime() {
    elapseTime = Data.now() - startTime;

    secs = Math.floor((elapseTime / 1000) % 60);
    mins = Math.floor((elapseTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    const pad = (unit) => {
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    };
};
