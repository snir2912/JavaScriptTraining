function myClock() {
    let date = new Date();
    let h = date.getHours();
    h = (h < 10) ? "0" + h : h;
    let m = date.getMinutes();
    m = (m < 10) ? "0" + m : m
    let s = date.getSeconds();
    s = (s < 10) ? "0" + s : s;
    let clock = h + ':' + m + ":" + s;
    setInterval(myClock, 1000);
    let p = document.getElementById('p').innerHTML = clock;
}

function towDigit(n) {
    return n < 10 ? "0" + n : n;
}
myClock();