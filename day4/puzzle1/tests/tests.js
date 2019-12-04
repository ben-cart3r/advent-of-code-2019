
const assert = require('assert');
const solver = require('../solver');

describe('Day 4, Puzzle 1', function() {

    describe('Test case 1', function() {

        it('Should return true when input is 111111', function() {

            let result = solver.validate('111111');

            assert.equal(result, true)

        });

    });

    describe('Test case 2', function() {

        it('Should return false when input is 223450', function() {

            let result = solver.validate('223450');

            assert.equal(result, false)

        });

    });

    describe('Test case 3', function() {

        it('Should return false when input is 123789', function() {

            let result = solver.validate('123789');

            assert.equal(result, false)

        });

    });
    
});
