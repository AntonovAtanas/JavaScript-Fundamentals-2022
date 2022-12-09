function matchFullName (input){

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g
    let result = input.match(regex);

    console.log(result.join(' '))
}

matchFullName ("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")