function deposits (input){

    let pari = Number(input[0])
    let srok = Number(input[1])
    let gpr = Number(input[2])
    let interestperyear = pari * (gpr/100)
    let monthlyinterest = interestperyear / 12
    let total = pari + monthlyinterest*srok

    console.log(total)


}

deposits (["2350",

"6 ",

"7 "])