function basketballEquipment (input){

    let taksa = Number(input[0])
    let kecove = taksa * (40/100)
    let finalKecove = taksa - kecove
    let ekip = finalKecove * (20/100)
    let finalEkip = finalKecove - ekip
    let ball = finalEkip / 4
    let accessories = ball / 5
    let expenses = taksa + finalKecove + finalEkip + ball + accessories


    console.log (expenses)

}

basketballEquipment(["365"])