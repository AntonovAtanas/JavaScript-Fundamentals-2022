function concatenate (input){

    let firstname = input[0]
    let secondname = input[1]
    let age = Number(input[2])
    let city = input[3]
    let res = `You are ${firstname} ${secondname} a ${age}-years old person from ${city}.`


    console.log(res)
}

concatenate (["Atanas", "Antonov", "29", "Pazardzhik"])