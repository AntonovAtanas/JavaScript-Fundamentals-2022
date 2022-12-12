function toyStore (input){

    let travel = Number(input[0])
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    let discount = 0
    let totalOrderQuantity = puzzle + doll + bear + minion + truck
    let totalOrderSum = puzzle*2.60 + doll*3 + bear*4.10 + minion*8.20 + truck*2

    if (totalOrderQuantity >= 50 ){
        discount = totalOrderSum * (25/100)
    }

    let profit = totalOrderSum - discount
    let rent = profit * (10/100)
    let clearProfit = profit - rent
    let moneyAfterTravel = clearProfit - travel
    let missingMoney = travel - clearProfit

    if (clearProfit >= travel){
        console.log(`Yes! ${moneyAfterTravel.toFixed(2)} lv left.`)
    }   else {
        console.log(`Not enough money! ${missingMoney.toFixed(2)} lv needed.`)
    }
}   

toyStore (["320", "8", "2", "5", "5", "1"])