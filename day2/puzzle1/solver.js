module.exports = (input, noun, verb) => {

    let terminate = false;
    let idx = 0;

    input[1] = noun;
    input[2] = verb;

    while(!terminate) {
        let operand = input[idx];
        let inputPointer1 = input[idx + 1];
        let inputPointer2 = input[idx + 2];
        let outputPointer = input[idx + 3];
        
        if(operand == 1) {
            input[outputPointer] = input[inputPointer1] + input[inputPointer2];
        }
        else if (operand == 2) {
            input[outputPointer] = input[inputPointer1] * input[inputPointer2];
        }
        else {
            terminate = true;
        }

        idx += 4;
    }

    return input;
}