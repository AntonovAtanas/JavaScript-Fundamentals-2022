function storage (input){

    let inventory = {}

    input.forEach(line => {
        let [item, price] = line.split(' ');

        if (inventory[item]){
            inventory[item] += Number(price);
        } else {
            inventory[item] = Number(price);
        }
    });

    for (let item in inventory){
        console.log(`${item} -> ${inventory[item]}`);
    }

}

storage (['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])