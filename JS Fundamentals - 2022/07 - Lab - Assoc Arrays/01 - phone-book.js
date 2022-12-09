function phoneBook (input){

    let phoneBookRegister = {};

    input.forEach(person => {
        let [name, number] = person.split(' ');
        phoneBookRegister[name] = number;
    });

    for (let person in phoneBookRegister){
        console.log(`${person} -> ${phoneBookRegister[person]}`)
    }
}

phoneBook (['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])