let time = 0;
let running = true;
let result = document.getElementById('result');

function startWatch() {
    if (running == true) {
        running = false;
        increment();
    }
}

function pause() {
    running = true;
}

function reset() {
    running = true;
    time = 0;
    result.innerText = '00 : 00 : 00';
}

function increment() {
    if (running == false) {
        setTimeout(function () {
            time++;
            let secs = Math.floor(time / 10 % 60);
            let mins = Math.floor(time / 10 / 60);
            let hours = Math.floor(time / 10 / 60 / 60);

            if (secs < 10) {
                secs = '0' + secs;
            }
            if (mins < 10) {
                mins = '0' + mins;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }

            result.innerHTML = `${hours} : ${mins} : ${secs}`;
            increment();
        }, 100)
    }
}