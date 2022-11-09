function storeProvision(currentStock, orderedStock) {

    let storeInventory = {

    }

    for (let i = 0; i < currentStock.length; i+=2){
        storeInventory[currentStock[i]];
        storeInventory[currentStock[i]] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < orderedStock.length; i+=2){
        
        if (storeInventory.hasOwnProperty(orderedStock[i])){
            storeInventory[orderedStock[i]] += Number(orderedStock[i + 1]);
        } else {
            storeInventory[orderedStock[i]];
            storeInventory[orderedStock[i]] = Number(orderedStock[i + 1]);
        }
    }
    
    for (let key of Object.keys(storeInventory)){
        console.log(`${key} -> ${storeInventory[key]}`)
    }

    //// for (let key in storeInventory)
}

storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ], [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ])