const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector("body"),
};

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


function startChangeBGColor() {
    intervalId = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, 5)];
        refs.startBtn.disabled = true;
    }, 1000);
}

function stopChangeBGColor() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', startChangeBGColor);

refs.stopBtn.addEventListener('click', stopChangeBGColor);