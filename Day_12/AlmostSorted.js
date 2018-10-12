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

// Complete the almostSorted function below.
function almostSorted(arr) {
    var diff1=  [arr.length];
    diff1[0]=arr[0];

    var invalids= [];

    for(var i = 1 ; i < arr.length ; i++){
        diff1[i] = arr[i]-arr[i-1];
        if(diff1[i] < 0){
            invalids.push(i);
        }
    }

    if(invalids.length == 0){
        console.log("yes");
        return;
    }else if(invalids.length == 1){
        var idx=invalids[0];
        if(idx-2 < 0 || arr[idx] > arr[idx-2]){
            if(idx+1 >= arr.length || arr[idx-1] < arr[idx+1]){
                console.log("yes");
                console.log("swap "+(idx-1+1)+" "+(idx+1));
                return;

            }
        }
    }else if(invalids.length == 2){
        var idx1 = invalids[0];
        var idx2 = invalids[1];

        if(idx1-2 < 0 || arr[idx2] > arr[idx1-2]){
            if(idx2+1 >= arr.length || arr[idx1-1] < arr[idx2+1]){
                console.log("yes");
                console.log("swap "+(idx1-1+1)+" "+(idx2+1));
                return;

            }
        }

    }else{

        for(var i = 1 ; i < invalids.length ; i++){
            if(invalids[i]-invalids[i-1] != 1){
                console.log("no");
                return;
            }
        }

        var idx1 = invalids[0];
        var idx2 = invalids[invalids.length-1];

        if(idx1-2 < 0 || arr[idx2] > arr[idx1-2]){
            if(idx2+1 >= arr.length || arr[idx1-1] < arr[idx2+1]){
                console.log("yes");
                console.log("reverse "+(idx1-1+1)+" "+(idx2+1));
                return;
            }
        }

    }


    console.log("no");



}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    almostSorted(arr);
}