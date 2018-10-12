'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {

    var c = 0, j = 0, k = 0, count = 0;
    var n = 0, a = 0, b = 0;

    var result = [];

    for (j = p; j <= q; j++) {
        n = Math.floor(Math.pow(j, 2));
        k = j;
        while (k != 0) {
            c++;
            a = Math.floor(n / Math.pow(10, c));
            b = Math.floor(n % Math.pow(10, c));
            k = Math.floor(k / 10);
        }
        c = 0;
        if ((a + b) == j && b != 0) {
            count++;
            result.push(j);
        }
    }



    if (count == 0) {
        console.log("INVALID RANGE");
    }
    console.log(result.join(' '));


}

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
