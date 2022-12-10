function architect(input){

    let ime  = input[0]
    let proekti = Number(input[1])
    let vreme = proekti*3
    let res = `The architect ${ime} will need ${vreme} hours to complete ${proekti} project/s.`

    console.log(res)


}
architect(["Georgi", "9"])