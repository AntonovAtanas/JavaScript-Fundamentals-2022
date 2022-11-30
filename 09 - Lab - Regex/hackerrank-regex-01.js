function regExp (input){

    let regex = /^([aeiou]).*\1$/

    let result = regex.test(input)

    console.log(result)
}

regExp ('abcooieda')