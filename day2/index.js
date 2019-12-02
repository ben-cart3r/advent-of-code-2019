const fs = require('fs');

const solver1 = require("./puzzle1/solver")
const solver2 = require("./puzzle2/solver")

fs.readFile(`${__dirname}/input.txt`, { encoding: 'utf8'} , (err, data) => {

    let parts = data.split(',').map(p => parseInt(p));

    let answer1 = solver1([...parts], 12, 2)[0];
    let answer2 = solver2([...parts], 19690720);

    console.log(`Puzzle 1: ${answer1}`);
    console.log(`Puzzle 2: ${answer2}`);
});