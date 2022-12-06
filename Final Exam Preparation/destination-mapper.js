function destinationMapper (input){

    let pattern = /([\=|\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g
    let destinationArray = []
    let points = 0;
    let result = input.matchAll(pattern);

    for (const iterator of result) {
        destinationArray.push(iterator.groups.destination);
        points += iterator.groups.destination.length
    }
    console.log(`Destinations: ${destinationArray.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper ("ThisIs some InvalidInput")