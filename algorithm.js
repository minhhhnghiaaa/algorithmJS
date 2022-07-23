//Make uppercase first
function getFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Clock
function past(h, m, s) {
    let secondsToMillisec = s * 1000;
    let minutesToMillisec = m * 60000;
    let hoursToMillisec = h * 3600000;

    return secondsToMillisec + minutesToMillisec + hoursToMillisec;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];

    var positive = 0;
    var negative = 0;

    for (var i = 0, l = input.length; i < l; ++i) {
        if (input[i] > 0)
            ++positive;
        else
            negative += input[i];
    }

    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var min = function (list) {
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function (list) {
    list.sort((a, b) => (b - a));
    return list[0];
}
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const stringToArray = string => string.split(' ');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const maps = arr => arr.map(x => x * 2)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function abbrevName(name) {
    return name.split(" ").map(el => el[0].toUpperCase()).join(".")
}

function highAndLow(numbers){
    const nums = numbers.split(" ")
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
  }

  const withoutFirstAndLast = str.slice(1, -1);

  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);