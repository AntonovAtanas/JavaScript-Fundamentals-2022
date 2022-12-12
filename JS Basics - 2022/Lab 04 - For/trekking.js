function trekking (input){


    let groupCount = Number (input[0]);
    let groupMusala = 0;
    let groupMontblanc = 0;
    let groupKilimanjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    for (let i = 1; i <= groupCount ; i++){

        let group = Number(input[i])

        if (group < 6){
            groupMusala += group;
        } else if (group < 13){
            groupMontblanc += group
        } else if (group < 26 ){
            groupKilimanjaro += group;
        } else if (group < 41){
            groupK2 += group;
        } else {
            groupEverest += group;
        }

    }

    let totalClimbers = groupMusala + groupMontblanc + groupKilimanjaro + groupK2 + groupEverest

    console.log(`${((groupMusala / totalClimbers) * 100).toFixed(2)}%`)
    console.log(`${((groupMontblanc / totalClimbers) * 100).toFixed(2)}%`)
    console.log(`${((groupKilimanjaro / totalClimbers) * 100).toFixed(2)}%`)
    console.log(`${((groupK2 / totalClimbers) * 100).toFixed(2)}%`)
    console.log(`${((groupEverest / totalClimbers) * 100).toFixed(2)}%`)

}

trekking (["5",

"25",

"41",

"31",

"250",

"6"])