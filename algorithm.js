//Make uppercase first

function getFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// Clock
function past(h, m, s) {
    let secondsToMillisec = s * 1000;
    let minutesToMillisec = m * 60000;
    let hoursToMillisec = h * 3600000;

    return secondsToMillisec + minutesToMillisec + hoursToMillisec;
}