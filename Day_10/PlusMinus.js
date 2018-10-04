'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positives = parseFloat(arr.filter(value => value > 0).length / arr.length).toPrecision(6)
    let negatives = parseFloat(arr.filter(value => value < 0).length / arr.length).toPrecision(6)
    let zeroes = parseFloat(arr.filter(value => value === 0).length / arr.length).toPrecision(6)

    console.log(positives)
    console.log(negatives)
    console.log(zeroes)


}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
