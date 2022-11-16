function schoolGrades(input) {

    let school = {};

    for (let i = 0; i < input.length; i++) {
        let studentInfo = input[i].split(' ');
        let studentName = studentInfo.shift();

        if (!school[studentName]) {
            school[studentName] = []
        }

        school[studentName] = school[studentName].concat(studentInfo)
    };

    let schoolAsArray = Object.entries(school);
    schoolAsArray.sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]))

    for (const [name, grades] of schoolAsArray) {
        let sum = 0;
        for (const grade of grades) {
            sum += Number(grade)
        }
        let average = sum / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`)
    }
}

schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6'])