function addRemoveElements(input) {

    let initialNum = 1;
    let result = [];

    for (let command of input) {

        switch (command) {
            case 'add': result.push(initialNum); break;
            case 'remove': result.pop(); break;
        }
        initialNum++;
    }
    if (result.length == 0){
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);