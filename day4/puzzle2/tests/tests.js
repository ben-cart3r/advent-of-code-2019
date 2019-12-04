
const assert = require('assert');
const solver = require('../solver');

describe('Day 4, Puzzle 2', function() {

    describe('Test case 1', function() {

        it('Should return true when input is 112233', function() {

            let result = solver.validate('112233');

            assert.equal(result, true)

        });

    });

    describe('Test case 2', function() {

        it('Should return false when input is 123444', function() {

            let result = solver.validate('123444');

            assert.equal(result, false)

        });

    });

    describe('Test case 3', function() {

        it('Should return true when input is 111122', function() {

            let result = solver.validate('111122');

            assert.equal(result, true)

        });

    });
    
});
