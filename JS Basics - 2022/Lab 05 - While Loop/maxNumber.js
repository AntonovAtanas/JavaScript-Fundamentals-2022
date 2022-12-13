function maxNumber(input){
    let  index = 0
    let num = Number(input[index]);
    let buff = Number.MAX_SAFE_INTEGER
 
    while(input[index] != "Stop"){
        num = Number(input[index])
        index++
        if (num < buff){
            buff = num
        }
    }
console.log(buff)
}

maxNumber(["100",

    "99",

    "80",

    "70",

    "Stop"])