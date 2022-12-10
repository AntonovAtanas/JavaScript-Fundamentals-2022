function aquarium(input){

    let length = Number(input[0])
    let width = Number(input[1])
    let heigth = Number(input[2])
    let percentage = Number(input[3])

    let totalcubic = length * width * heigth
    let literobem = totalcubic / 1000
    let zaeto = literobem * (percentage / 100)
    let total = literobem - zaeto

    console.log(total)

}

aquarium(["85 ", "75 ", "47 ", "17 "])