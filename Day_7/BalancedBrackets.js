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

// Complete the isBalanced function below.

class Stack {

    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

}
function isBalanced(s) {

    if (s == null) {
        return "YES";
    }

    var stack = new Stack();

    for (var i = 0; i < s.length; i++) {

        var currentChar = s[i];

        //if currentChar has {,[,( push them into the stack
        if (currentChar == '{' || currentChar == '[' || currentChar == '(') {
            stack.push(currentChar);
        }

        //if currentChar has },],),check if stack is empty,ifEmpty then not balanced
        if (currentChar == '}' || currentChar == ']' || currentChar == ')') {
            if (stack.isEmpty()) {
                return "NO";
            }
            //if not empty then see the last character

            var lastChar = stack.peek();
            //if lastChar and currentChar make pairs then pop from stack else return false

            if (currentChar == '}' && lastChar == '{' || currentChar == ')' && lastChar == '(' || currentChar == ']' && lastChar == '[') {
                stack.pop();
            } else {
                return "NO";
            }
        }
    }

    //at last see if stack is empty.
    return stack.isEmpty() ? "YES" : "NO";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
