function regExp (input){

    let regex = /(?:Mr|Ms|Mrs|Dr|Er)\.[A-Z][a-z]*$/g

    let result = regex.test(input)

    console.log(result)
}

regExp ('Mrs.Yd.')