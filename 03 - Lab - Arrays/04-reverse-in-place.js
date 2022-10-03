function reverseInPlace(input) {

    let result = '';

    for (let i = input.length - 1; i >= 0; i--) {
        let command = input[i]
        result += (command + ' ');

    }
    console.log(result)
}

reverseInPlace(['abc', 'def', 'hig',

    'klm', 'nop'])