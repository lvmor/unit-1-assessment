var countPlus = (function () {
    var counter = 0;
    return function () { return counter += 1; }
})();

function increment() {
    document.getElementById("count-Output").innerHTML = countPlus();
}

var countMinus = (function () {
    var counter = 0;
    return function () { return counter -= 1; }
})();

function decrement() {
    document.getElementById("count-Output").innerHTML = countMinus();
}