function godzilla (input){

    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let dressPrice = Number(input[2]);


    let decorPrice = budget * 0.10
    let discount = 0;
    
    let dressExpenses = actorsCount * dressPrice 

    
    
    if (actorsCount > 150){
        discount = dressExpenses * 0.10
    }
    
    let totalExpenses = decorPrice + dressExpenses - discount

    if (totalExpenses > budget){
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`)
    }


}

godzilla (["20000", 
"120",
"55.5"])




