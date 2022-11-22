function addressBook (input){

    let addressRegister = {};

    input.forEach(personInfo => {
        let [name, address] = personInfo.split(':')
        addressRegister[name] = address;
    });

    let addressRegisterArray = Object.entries(addressRegister);

    addressRegisterArray.sort((a, b) => a[0].localeCompare(b[0]))

    addressRegister = Object.fromEntries(addressRegisterArray)

    for (let person in addressRegister){
        console.log(`${person} -> ${addressRegister[person]}`)
    }
}

addressBook (['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])