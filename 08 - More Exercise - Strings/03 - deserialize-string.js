function deserializeString(input) {

    let result = [];
    let command = input.shift();

    while (command !== 'end') {
        let [char, indexes] = command.split(':')
        indexes = indexes.split('/')

        indexes.forEach(element => {
            element = Number(element)
            result[element] = char
        });

        command = input.shift();
    }
    console.log(result.join(''))
}

deserializeString(['a:0/3/5/11',

    'v:1/4',

    'j:2',

    'm:6/9/15',

    's:7/13',

    'd:8/14',

    'c:10',

    'l:12',

    'end'])