function sortNumbers(input) {
    let result = [];

    while (input.length > 0) {

        input.sort((a, b) => a - b);
        result.push(input[0]);
        input.shift()

        input.sort((a, b) => b - a);
        result.push(input[0]);
        input.shift();
    }
    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));