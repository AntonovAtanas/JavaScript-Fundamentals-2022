function barIncome(input) {

    let regex = /%(?<name>[A-Z][a-z]+)%[^\|\.\%\$]*<(?<item>\w+)>[^\|\.\%\$]*\|(?<count>\d+)\|[^\|\.\%\$]*?(?<price>\d+\.*\d*)\$/g
    let totalSum = 0;
    let command = input.shift();

    while (command !== "end of shift") {

        let info = command.matchAll(regex);

        for (const currentPerson of info) {
            let name = currentPerson.groups.name;
            let item = currentPerson.groups.item;
            let quantity = Number(currentPerson.groups.count);
            let price = Number(currentPerson.groups.price);
            totalSum += quantity * price;
            console.log(`${name}: ${item} - ${(quantity*price).toFixed(2)}`)
        }
        
        command = input.shift();
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`)
}

barIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])