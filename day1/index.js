const fs = require('fs');
const readline = require('readline');

const solver1 = require("./puzzle1/solver")
const solver2 = require("./puzzle2/solver")

const stream = fs.createReadStream(__dirname + '/input.txt')
const readInterface = readline.createInterface({
    input: stream
});

let answer1 = 0;
let answer2 = 0;

readInterface.on('line', function (line) {
    answer1 += solver1(parseInt(line));
    answer2 += solver2(parseInt(line));
});

readInterface.on('close', function () {
    console.log(`Puzzle 1: ${answer1}`);
    console.log(`Puzzle 2: ${answer2}`);
});

