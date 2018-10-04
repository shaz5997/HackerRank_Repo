process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    const HACKER_RANK = "hackerrank";
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        let s = readLine(), i = 0;
        Array.prototype.map.call(s, function(x) {
            if (x === HACKER_RANK.charAt(i) && i < 10) i++;
        });
        console.log(i < 10 ? "NO" : "YES");
    }

}