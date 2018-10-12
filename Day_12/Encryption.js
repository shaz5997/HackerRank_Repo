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

// Complete the encryption function below.
function encryption(s) {
    
     var s1=s.replace(" ","");
        var len = s1.length;
        var ubound = Math.ceil(Math.sqrt(len));
        
        var result = "";
        for(var i = 0 ; i < ubound ; i++) {
            for(var j = i ; j < len ; j = j + ubound ) {
                result+=s.charAt(j);
            }
            result+=" ";
        }
        return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}