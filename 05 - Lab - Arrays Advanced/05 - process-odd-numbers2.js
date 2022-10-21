function processOddNumbers1(input) {

    let result = input.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse()
    console.log(result.join(' '))
}

processOddNumbers1([10, 15, 20, 25])