
const assert = require('assert');
const solver = require('../solver');

describe('Day 1, Puzzle 2', function() {
  
    describe('Test case 1', function() {

        it('Should return 2 when input is 12', function() {

            let result = solver(12);

            assert.equal(result, 2)

        });

    });

    describe('Test case 2', function() {

        it('Should return 2 when input is 14', function() {

            let result = solver(14);

            assert.equal(result, 2)

        });

    });

    describe('Test case 3', function() {

        it('Should return 966 when input is 1969', function() {

            let result = solver(1969);

            assert.equal(result, 966)

        });

    });

    describe('Test case 4', function() {

        it('Should return 50346 when input is 100756', function() {

            let result = solver(100756);

            assert.equal(result, 50346)

        });

    });
});
