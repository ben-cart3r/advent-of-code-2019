
const calcFuelRequirement = (mass) => {
    let fuelMass = Math.floor(mass / 3) - 2;

    if(fuelMass <= 0) {
        return 0;
    } 

    return fuelMass + calcFuelRequirement(fuelMass)
}

module.exports = (input) => calcFuelRequirement(input);