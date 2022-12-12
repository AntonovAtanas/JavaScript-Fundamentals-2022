function lilly (input){

    let age = Number (input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number (input[2]);
    let money = 0;
    

    for (let i = 1; i <= age; i++){

        if (i % 2 === 0 ){
            money += (5*i)-1
        } else {
            money += toyPrice
        }


    }

    if (money >= washingMachine){
        console.log(`Yes! ${(money-washingMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachine - money).toFixed(2)}`)
    }
    
    
}

lilly (["21",

"1570.98",

"3"])