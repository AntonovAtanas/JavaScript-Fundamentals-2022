function foodDelivery (input){

    let chicken = Number(input[0])
    let fish = Number(input[1])
    let vegetarian = Number(input[2])

    let chickenMenu = chicken * 10.35
    let fishMenu = fish * 12.40
    let vegetarianMenu = vegetarian * 8.15
    let totalMenu = chickenMenu +  fishMenu + vegetarianMenu
    
    let desert = totalMenu * (20/100)

    let totalprice = totalMenu + desert + 2.50

    console.log(totalprice)

}

foodDelivery(["9 ", "2 ", "6 "])