function printSum (start, end){

    let sum = 0;
    let output = '';

    for (start; start <= end; start++){
        output += `${start} `
        sum += start;
    }
    console.log(output)
    console.log(`Sum: ${sum}`)
}

printSum (5, 10)