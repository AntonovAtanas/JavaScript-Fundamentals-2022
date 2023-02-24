function cars(commands) {

    let object = {};

    commands.forEach(element => {
        let [command, name, details, value] = element.split(' ');

        if (command === 'create' && details === undefined) {
            object[name] = {}
        } else if (command === 'create' && details === 'inherit') {
            object[name] = Object.create(object[value])
        } else if (command === 'set') {
            object[name][details] = value;
        } else {
            let arr = []
            for (const values in object[name]) {
                arr.push(`${values}:${object[name][values]}`);
            }
            console.log(arr.join(','))
        }
    });

}

cars (['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2']);

