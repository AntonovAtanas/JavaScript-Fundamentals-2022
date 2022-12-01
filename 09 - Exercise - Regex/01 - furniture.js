function furniture(input) {

    let command = input.shift();
    let sum = 0;
    let items = [];
    let regex = />>(?<item>[A-Z][A-Za-z]*)<<(?<price>\d+\.*\d*)!(?<quantity>\d+)/g
    while (command !== "Purchase") {

        let currentPurchase = command.matchAll(regex)
        for (const iterator of currentPurchase) {
            let currentItem = iterator.groups.item;
            let price = Number(iterator.groups.price) * iterator.groups.quantity;
            sum += price;
            items.push(currentItem);
        }
        command = input.shift();
    }
    items.length === 0 ? console.log(`Bought furniture:\nTotal money spend: ${sum.toFixed(2)}`) : console.log(`Bought furniture:\n${items.join('\n')}\nTotal money spend: ${sum.toFixed(2)}`)

}

furniture(['>Laptop<<312.2323!3',

'>TV<<300.21314!5',

'>Invalid<<!5',

'>TV<<300.21314!20',

'>Invalid<!5',

'>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase'])