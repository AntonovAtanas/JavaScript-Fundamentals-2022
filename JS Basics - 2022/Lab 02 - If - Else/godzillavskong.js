function godzillaVsKong (input){

    let budget = Number(input[0])
    let actors = Number(input[1])
    let clothingPerActor = Number(input[2]);
    let clothingDiscount = 0;
    let decor = budget * (10/100);
    let totalClothing = actors * clothingPerActor

    if (actors > 150){
        clothingDiscount = totalClothing * (10/100)
    }

    let clothingAfterDiscount = totalClothing - clothingDiscount
    
    
    if (decor + clothingAfterDiscount > budget){
        console.log (`Not enough money!`)
        console.log (`Wingard needs ${((decor + clothingAfterDiscount) - budget).toFixed(2)} leva more.`)
    } else {
        console.log (`Action!`);
        console.log (`Wingard starts filming with ${(budget - (decor + clothingAfterDiscount)).toFixed(2)} leva left.`)
    }

}

godzillaVsKong (["15437.62",

"186",

"57.99"])