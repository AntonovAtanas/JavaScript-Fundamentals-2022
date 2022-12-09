function softuniReception (input){

    let studentsCount = Number(input.pop());
    let employeeArray = input.slice().map(Number);
    let answeredPerHour = 0;
    employeeArray.forEach(a => {
        answeredPerHour += a
    });

    let hourCounter = 0;

    while (studentsCount > 0){
        hourCounter++;

        if (hourCounter % 4 == 0){
            continue;
        }
        studentsCount -= answeredPerHour
    }
    console.log(`Time needed: ${hourCounter}h.`)
}

softuniReception(['3','2','5','40'])