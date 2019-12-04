const fs = require('fs');

const solver1 = require("./puzzle1/solver")
const solver2 = require("./puzzle2/solver")

fs.readFile(`${__dirname}/input.txt`, { encoding: 'utf8'} , (err, data) => {

    let paths = data.split('\n');

    let answer1 = solver1(paths[0], paths[1]);
    let answer2 = solver2(paths[0], paths[1]);

    console.log(`Puzzle 1: ${answer1}`);
    console.log(`Puzzle 2: ${answer2}`);
});