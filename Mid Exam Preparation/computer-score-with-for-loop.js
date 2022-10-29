function computerScore(input) {

    let array = input.slice();
    let arrayLength = array.length;
    let isSpecial = false;
    let priceCounter = 0;
    let taxesCounter = 0;

    for (let i = 0; i < arrayLength; i++) {
        let command = array[i]

        if (command === "special") {
            isSpecial = true;
            break;
        } else if (command === "regular") {
            break;
        } else {
            let price = Number(command);
            if (price < 0) {
                console.log(`Invalid price!`)
            } else {
                priceCounter += price;
                let tax = price * 0.20;
                taxesCounter += tax
            }
        }
    }

    let totalPrice = priceCounter + taxesCounter;

    if (isSpecial) {
        let discount = totalPrice * 0.10
        totalPrice = totalPrice - discount
    }
    if (totalPrice == 0) {
        console.log(`Invalid order!`)
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${priceCounter.toFixed(2)}$`)
        console.log(`Taxes: ${taxesCounter.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${totalPrice.toFixed(2)}$`)
    }
}

computerScore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])

