function beerAndChips (input){

    let name = input[0] ;
    let budget = Number(input[1]) ;
    let beersCount = Number(input[2]);
    let chipsCount = Number(input[3]);


    let beerSum = beersCount * 1.20 ; 
    let chipsPrice = beerSum * 0.45 ;

    let chipsSum = Math.ceil(chipsCount * chipsPrice);

    let totalSum = chipsSum + beerSum

    if (budget >= totalSum){

        console.log(`${name} bought a snack and has ${(budget - totalSum).toFixed(2)} leva left.`)

    } else {

        console.log(`${name} needs ${Math.abs(totalSum - budget).toFixed(2)} more leva!`)

    }




}

beerAndChips (["Valentin",
"5",
"2",
"4"])

