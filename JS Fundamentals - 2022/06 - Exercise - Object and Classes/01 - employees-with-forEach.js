function employees(input) {

    let employeeInfo = {

    }

    input.forEach(person => {
        employeeInfo[person] = person.length
    });

    for (const key in employeeInfo) {
        console.log(`Name: ${key} -- Personal Number: ${employeeInfo[key]}`)
    }

}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])