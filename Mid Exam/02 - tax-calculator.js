function taxCalculator(input) {

    let familyCarTax = 50;
    let heavyDutyCarTax = 80;
    let sportsCarTax = 100;
    let totalTaxes = 0;
    let carsArray = input.join(' ').split(">>");
    let carsArrayLength = carsArray.length;

    for (let i = 0; i < carsArrayLength; i++) {
        let currentCarArray = carsArray[i].split(' ')
        let carType = currentCarArray[0];
        let years = Number(currentCarArray[1]);
        let kilometers = Number(currentCarArray[2]);
        let yearsTax = 0
        let kilometersDiscount = 0;

        if (carType == "family") {

            kilometersDiscount = Math.floor(kilometers / 3000)
            yearsTax = kilometersDiscount * 12 + (familyCarTax - 5 * years)
            console.log(`A ${carType} car will pay ${yearsTax.toFixed(2)} euros in taxes.`)
            totalTaxes += yearsTax
        } else if (carType == "heavyDuty") {

            kilometersDiscount = Math.floor(kilometers / 9000);
            yearsTax = kilometersDiscount * 14 + (heavyDutyCarTax - 8 * years);
            console.log(`A ${carType} car will pay ${yearsTax.toFixed(2)} euros in taxes.`)
            totalTaxes += yearsTax
        } else if (carType == "sports") {

            kilometersDiscount = Math.floor(kilometers / 2000);
            yearsTax = kilometersDiscount * 18 + (sportsCarTax - 9 * years);
            console.log(`A ${carType} car will pay ${yearsTax.toFixed(2)} euros in taxes.`)
            totalTaxes += yearsTax
        } else {
            console.log(`Invalid car type.`)
        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`)
}

taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])