'use strict';

const fs = require('fs');

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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    
        var set =  new Set();
        var result = "";
        s = s.toLowerCase();
        var strArr = [...s];
        if(s.length % 2 == 0) {
            
            for(var ch of strArr) {
                if(set.has(ch)) {
                    set.delete(ch);
                }else {
                    set.add(ch);
                }
            }
            console.log(set);
            console.log("if"+set.size);
            if(set.size == 0) {
                result = "YES";
            }else {
                result = "NO";
            }
        }else {
            for(var ch of strArr) {
                if(set.has(ch)) {
                    set.delete(ch);
                }else {
                    set.add(ch);
                }
            }
            console.log(set);
           console.log("else"+set.size);
            if(set.size == 1) {
                result = "YES";
            }else {
                result = "NO";
            }
            
        }

        return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}