function bonusSystem(input) {

    input = input.map(Number);
    let studentCount = input.shift();
    let lecturesCount = input.shift();
    let additionalBonus = input.shift();
    let biggestBonus = 0;
    let biggestStudentAttendances = 0;

    for (let i = 0; i < studentCount; i++) {

        let attendance = input[i];
        let totalBonus = attendance / lecturesCount * (5 + additionalBonus)

        if (totalBonus > biggestBonus) {
            biggestBonus = totalBonus
            biggestStudentAttendances = attendance
        }
    }

    console.log(`Max Bonus: ${Math.round(biggestBonus)}.`)
    console.log(`The student has attended ${biggestStudentAttendances} lectures.`)
}

bonusSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
])