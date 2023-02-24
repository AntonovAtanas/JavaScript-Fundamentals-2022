function list(input) {

    let collection = [];

    function listProcessor(input) {

        let obj = {
            add(string) {
                collection.push(string)
            },
            remove(string) {
                collection = collection.filter(element => element !== string);
            },
            print() {
                console.log(collection.join(','))
            }
        };

        input.forEach(element => {
            let [command, string] = element.split(' ');
            obj[command](string)
        });

    }

     listProcessor (input)
}
list(['add hello', 'add again', 'remove hello', 'add again', 'print'])