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

// Complete the staircase function below.
function staircase(n) {

    for (let i = 0; i < n; i++) {
        // Clear the output after each loop
        let output = '';
        for (let j = 0; j < n; j++) {
            // Loop through, whenever (n-1-i) is bigger than j concat a space else #
            j < (n - 1 - i) ? output += ' ' : output += '#';
        }
        console.log(output);
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
