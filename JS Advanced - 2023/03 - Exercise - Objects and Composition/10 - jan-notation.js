function janNotation(input) {

    let nums = [];
    let operators = [];
    let result = []

    for (const iterator of input) {
        if (typeof iterator == 'number') {
            nums.push(iterator);
        } else {
            operators.push(iterator);
        }
    }

    if (operators.length === nums.length || nums.length == 0) { // check if edge case if there are no nums or operators
        console.log('Error: not enough operands!');
        return;
    } else if (nums.length > operators.length + 1 || operators.length == 0) { // check if edge case if there are no nums or operators
        console.log('Error: too many operands!');
        return;
    }

    for (const command of input) {
        if (typeof command === 'number'){
            result.push(command);
            continue;
        }
        let lastNum = result.pop();
        let lastNumBefore = result.pop();
        let resultNum = 0;
        switch (command) {
            case '+':
                resultNum = lastNum + lastNumBefore;
                break;
            case '-':
                resultNum = lastNumBefore - lastNum;
                break;
            case '*':
                resultNum = lastNum * lastNumBefore;
                break;
            case '/':
                resultNum = lastNumBefore / lastNum;
                break;
            default:
                break;
        }
        result.push(resultNum)
    }
    console.log(result.join(''))
}

janNotation(
    [5,

        3,

        4,

        '*',

        '-'])

console.log('---')

janNotation(
    [3,

        4,

        '+']);

console.log('---')

janNotation([31
    , 2
    , '+'
    , 11
    , '/'])