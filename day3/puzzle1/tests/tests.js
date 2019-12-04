
const assert = require('assert');
const solver = require('../solver');

describe('Day 3, Puzzle 1', function() {

    describe('Test case 1', function() {

        it('Should return 159 when input is (R75,D30,R83,U83,L12,D49,R71,U7,L72), (U62,R66,U55,R34,D71,R55,D58,R83)', function() {

            let result = solver('R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83');

            assert.equal(result, 159)

        });

    });

    describe('Test case 2', function() {

        it('Should return 6 when input is (R8,U5,L5,D3), (U7,R6,D4,L4)', function() {

            let result = solver('R8,U5,L5,D3','U7,R6,D4,L4');

            assert.equal(result, 6)

        });

    });

    describe('Test case 3', function() {

        it('Should return 135 when input is (R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51), (U98,R91,D20,R16,D67,R40,U7,R15,U6,R7)', function() {

            let result = solver('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7');

            assert.equal(result, 135)

        });

    });
    
});
