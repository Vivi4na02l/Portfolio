getDate();
startTime();

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkDigits(m);
    document.querySelector('#digitalClock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
}

function getDate() {
    const today = new Date();
    let d = today.getDate();
    let m = today.getMonth()+1;
    d = checkDigits(d);
    m = checkDigits(m);
    let y = today.getFullYear();
    document.querySelector('#todaysDate').innerHTML = d + '/' + m + '/' + y;
}

function checkDigits(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}