function regExp(input) {
    let array = input.split(' ');
    let regex = /[\d]+/g


    let result = input.match(regex);
    console.log(result.join('\n'))

}

regExp('102, 1948948 and 1.3 and 4.5')