
const solver1 = require("./puzzle1/solver")
const solver2 = require("./puzzle2/solver")

let answer1 = solver1.solve(240298, 784956);
let answer2 = solver2.solve(240298, 784956);

console.log(`Puzzle 1: ${answer1}`);
console.log(`Puzzle 2: ${answer2}`);