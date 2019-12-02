
const assert = require('assert');
const solver = require('../solver');

describe('Day2, Puzzle 1', function() {
  
    describe('Test case 1', function() {

        it('Should return (2,0,0,0,99) when input is (1,0,0,0,99)', function() {

            let result = solver([1,0,0,0,99], 0, 0);

            assert.deepEqual(result, [2,0,0,0,99])

        });

    });

    describe('Test case 2', function() {

        it('Should return (2,3,0,6,99) when input is (2,3,0,3,99)', function() {

            let result = solver([2,3,0,3,99], 3, 0);

            assert.deepEqual(result, [2,3,0,6,99])

        });

    });

    describe('Test case 3', function() {

        it('Should return (2,4,4,5,99,9801) when input is (2,4,4,5,99,0)', function() {

            let result = solver([2,4,4,5,99,0], 4, 4);

            assert.deepEqual(result, [2,4,4,5,99,9801])

        });

    });

    describe('Test case 4', function() {

        it('Should return (30,1,1,4,2,5,6,0,99) when input is (1,1,1,4,99,5,6,0,99)', function() {

            let result = solver([1,1,1,4,99,5,6,0,99], 1, 1);

            assert.deepEqual(result, [30,1,1,4,2,5,6,0,99])

        });

    });

});
