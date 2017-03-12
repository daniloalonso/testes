console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

// Sleep function (approx time, not precise). minimum 15 ms
function sleep(mili_time) {
    if (mili_time == false)
        return;
    if (mili_time < 15)
        return;
    var _start = Date.now();
    while (true)
    {
        if ((Date.now() - _start) >= mili_time) {
            return;
        }
    }
}

console.log("sleeping 1 sec");
var ct = 10;
while (true) {
    var startTime = Date.now();
    sleep(100);
    console.log(ct.toString() + " Taken " + (Date.now() - startTime).toString() + " ms");
    ct--;
}

startTime = Date.now();
var isPrime = function (number) {
    if (number < 2) return false;
    for (var i = 2; i <= Math.floor(Math.sqrt(number)) ; i++) {
        if (number % i === 0) return false;
    }
    return true;
};

var number = 0;
var total = 100000;//1000000;
var numberOfPrimes = 0;
console.log("Calculating " + total.toString() + " of primes");
while (true) {
    if (isPrime(++number)) numberOfPrimes++;
    if (numberOfPrimes === total) break;
}
console.log("Taken " + (Date.now() - startTime).toString() + " ms");