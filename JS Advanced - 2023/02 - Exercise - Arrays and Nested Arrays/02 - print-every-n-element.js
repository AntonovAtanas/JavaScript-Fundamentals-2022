function printElement(input, num) {

    let result = [];

    for (let i = 0; i < input.length; i += num){
        result.push(input[i]);
    }

    return result;
}

console.log(printElement(['5', '20', '31', '4', '20'], 2));
console.log(printElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printElement(['1', '2', '3', '4', '5'], 6));