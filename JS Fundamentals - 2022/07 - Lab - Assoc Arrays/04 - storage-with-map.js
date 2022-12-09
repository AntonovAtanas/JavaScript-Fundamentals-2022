function storage (input){

    let inventoryMap = new Map();

    input.forEach(line => {
        let [item, price] = line.split(' ');
        price = Number(price)
        if (inventoryMap.has(item)){
            price += inventoryMap.get(item)
        } 

        inventoryMap.set(item, price)
    });

    for (let item of inventoryMap){
        console.log(`${item[0]} -> ${item[1]}`);
    }

}

storage (['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])