function shopping(input){

    let budget = Number(input[0])
    let videocard = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardPrice = videocard * 250
    let processorsPrice = processors * (videocardPrice * (35/100))
    let ramPrice = ram * (videocardPrice * (10/100))
    let discount = 0;
    let totalSpent = videocardPrice + processorsPrice + ramPrice

    if (videocard > processors){
        discount = totalSpent * (15/100)
    }

    let finalSpent = totalSpent - discount;


    if (budget >= totalSpent){
        console.log(`You have ${(budget - finalSpent).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(finalSpent - budget).toFixed(2)} leva more!`)
    }

}

shopping(["920.45",

"3",

"1",

"1"])