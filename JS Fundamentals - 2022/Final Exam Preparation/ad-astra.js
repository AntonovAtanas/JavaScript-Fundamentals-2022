function adAstra(input) {

    let encryptedMessage = input.shift();
    let foodInfoPattern = /([\#\|])(?<name>[A-Za-z ]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let caloriesPerDay = 2000;
    let caloriesCounter = 0;
    let result = encryptedMessage.matchAll(foodInfoPattern);

    for (const currentFood of result) {
        caloriesCounter += Number(currentFood.groups.calories);
    }
    let daysSupply = Math.trunc(caloriesCounter / caloriesPerDay);

    console.log(`You have food to last you for: ${daysSupply} days!`)

    result = encryptedMessage.matchAll(foodInfoPattern);
    for (const food of result) {
        console.log(`Item: ${food.groups.name}, Best before: ${food.groups.expiration}, Nutrition: ${food.groups.calories}`)
    }
}

adAstra
([
    '#Bread#19/03/21#1000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])

// ([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])