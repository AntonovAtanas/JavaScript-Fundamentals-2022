function inventory(input) {

    let initialJournal = input.shift().split(', ');
    let command = input.shift().split(" - ");

    while (command[0] !== "Craft!") {

        let currentCommand = command[0];
        let item = command[1];

        if (currentCommand === "Collect") {
            if (!initialJournal.includes(item)) {
                initialJournal.push(item)
            }
        } else if (currentCommand === "Drop") {
            if (initialJournal.includes(item)) {
                let itemIndexToDrop = initialJournal.indexOf(item);
                initialJournal.splice(itemIndexToDrop, 1)
            }
        } else if (currentCommand === "Combine Items") {
            item = item.split(":")
            let oldItem = item[0];
            let newItem = item[1];
            if (initialJournal.includes(oldItem)) {
                let indexOfOldItem = initialJournal.indexOf(oldItem);
                initialJournal.splice(indexOfOldItem + 1, 0, newItem)
            }
        } else if (currentCommand === "Renew") {
            if (initialJournal.includes(item)) {
                let indexOfItem = initialJournal.indexOf(item);
                let renewedItem = item;
                initialJournal.splice(indexOfItem, 1)
                initialJournal.push(renewedItem)
            }
        }
        command = input.shift().split(" - ")
    }
    console.log(initialJournal.join(', '))
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'

])