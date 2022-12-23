function fruit (fruitType, weightGr, priceKg) {

    let weightKg = weightGr / 1000;
    let finalPrice = weightKg * priceKg;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`)
}

fruit ('orange', 2500, 1.80)