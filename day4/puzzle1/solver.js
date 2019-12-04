
const validate = (potentialPassword) => {
    let foundDecreasingDigits = false;
    let foundDuplicateDigits = false;

    for(let i = 1; i < potentialPassword.length; ++i) {

        if(potentialPassword[i] < potentialPassword[i - 1]) {
            foundDecreasingDigits = true;
        }

        if(potentialPassword[i] === potentialPassword[i - 1]) {
            foundDuplicateDigits = true;
        }

    }

    return foundDuplicateDigits && !foundDecreasingDigits;
}

const solve = (lBound, UBound) => {
    let count = 0;

    for(let i = lBound; i < UBound; ++i) {
        if(validate(`${i}`)) {
            count++;
        }
    }

    return count;
}

module.exports = {
    validate,
    solve
}