const solver1 = require('../puzzle1/solver');

module.exports = (input, target) => {
    
    let terminate = false;
    let nounCounter = 0;
    let verbCounter = 0;

    while(!terminate) {
        if(solver1([...input], nounCounter, verbCounter)[0] > target) {    
            terminate = true;
            nounCounter--;
        }
        else if(nounCounter > 99) {
            terminate = true;
        }
        else {
            nounCounter++;
        }
    }

    terminate = false;
    
    while(!terminate) {
        if(solver1([...input], nounCounter, verbCounter)[0] > target) {
            terminate = true;
            verbCounter--;
        }
        else if(verbCounter > 99) {
            terminate = true;
        }
        else {
            verbCounter++;
        }
    }

    return 100 * nounCounter + verbCounter;
}