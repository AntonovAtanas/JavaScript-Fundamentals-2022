function argumentInfo(...params) {

    let types = {}

    params.forEach(element => {
        console.log(`${typeof element}: ${element}`)
        if (!types.hasOwnProperty(typeof element)) {
            types[typeof element] = 0;
        }
        types[typeof element] ++;
    });

    let sortedTypes = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (const currentType of sortedTypes) {
        console.log(`${currentType[0]} = ${currentType[1]}`)
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); }, 'daada', 288)