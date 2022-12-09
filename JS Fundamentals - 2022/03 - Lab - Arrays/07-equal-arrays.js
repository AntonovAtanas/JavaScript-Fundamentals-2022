function equalArrays(firstInput, secondInput) {

    let firstInputPosition = '';
    let secondInputPosition = '';
    let sum = 0;
    let areIdentical = true;

    for (let i = 0; i < firstInput.length; i++) {

        firstInputPosition = firstInput[i]

        secondInputPosition = secondInput[i];

        if (firstInputPosition === secondInputPosition) {
            sum += Number(firstInput[i])
        } else {
            areIdentical = false;

        }

        if (areIdentical) {
        }
        else {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            break;
        }

    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

equalArrays(['10', '20', '30'],

    ['10', '20', '30'])