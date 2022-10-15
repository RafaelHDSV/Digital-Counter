var sec = 0
var min = 0
var hr = 0
var interval = 0

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function startCounter() {
    timeCounter()
    interval = setInterval(timeCounter, 1000)
}

function pauseCounter() {
    clearInterval(interval)
}

function stopCounter() {
    clearInterval(interval)
    sec = 0
    min = 0
    hr = 0
    document.getElementById('counter').innerText = '00:00:00'
}

function timeCounter() {
    sec++

    if (sec == 60) {
        min++
        sec = 0

        if (min == 60) {
            hr++
            min = 0
            sec = 0
        }
    }

    document.getElementById('counter').innerText = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec)
}