function employees(input) {

    let employeeInfo = {

    }

    for (let person of input) {
        let personNumber = person.length;

        employeeInfo.employeeName = person;
        employeeInfo.personalNum = personNumber;

        console.log(`Name: ${employeeInfo.employeeName} -- Personal Number: ${employeeInfo.personalNum}`)
    }
}

employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])