
const validate = (potentialPassword) => {
    let foundDecreasingDigits = false;
    let foundDuplicateDigits = false;
    let i = 0;

    while(i < potentialPassword.length) {

        if(potentialPassword[i] < potentialPassword[i - 1]) {
            foundDecreasingDigits = true;
        }

        let countMatching = 0;

        while(potentialPassword[i + countMatching] == potentialPassword[i]) {
            countMatching++;
        }

        if(countMatching == 2) {
            foundDuplicateDigits = true;
        }

        i += countMatching;
    }

    return foundDuplicateDigits && !foundDecreasingDigits;
}

const solve = (lBound, UBound) => {
    let validPasswords = [];

    for(let i = lBound; i < UBound; ++i) {
        if(validate(`${i}`)) {
            validPasswords.push(i);
        }
    }

    let unique = validPasswords.reduce((acc, password) => {
        if(acc.indexOf(password) == -1) {
            acc.push(password);
        }

        return acc;
    }, []);

    return unique.length;
}

module.exports = {
    validate,
    solve
}