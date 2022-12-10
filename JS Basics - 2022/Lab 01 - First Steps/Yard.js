function Yard(input){

    let dvor = Number(input[0])
    let price = 7.61
    let totalprice = dvor*price
    let discount = totalprice*0.18
    let finalprice = totalprice-discount

    console.log(`The final price is: ${finalprice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

Yard(["550"])