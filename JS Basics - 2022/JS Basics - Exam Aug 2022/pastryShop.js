function pastryShop(input) {

    let type = input[0];
    let sweetsCount = Number(input[1]);
    let day = Number(input[2]);
    let sum = 0;
    let discount = 0;
    let earlyDiscount = 0;

    if (day <= 15) {

        switch (type) {
            case "Cake": sum += sweetsCount * 24; break;
            case "Souffle": sum += sweetsCount * 6.66; break;
            case "Baklava": sum += sweetsCount * 12.60; break;
        }

    } else {

        switch (type) {
            case "Cake": sum += sweetsCount * 28.70; break;
            case "Souffle": sum += sweetsCount * 9.80; break;
            case "Baklava": sum += sweetsCount * 16.98; break;
        }
    }

    if (day <= 22) {

        if (sum >= 100 && sum <= 200) {
            discount = sum * 0.15;
        } else {
            discount = sum * 0.25;
        }
    }
    let sum1 = sum - discount;

    if (day <= 15) {
        earlyDiscount = sum1 * 0.10;
    }

    let totalSum = sum1 - earlyDiscount

    console.log(totalSum.toFixed(2))

}

pastryShop(["Cake",
    "5",
    "12"])