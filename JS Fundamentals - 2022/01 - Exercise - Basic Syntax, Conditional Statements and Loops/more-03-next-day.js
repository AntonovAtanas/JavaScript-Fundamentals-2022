function nextDay(year, month, day) {



    let tomorrow = new Date(year, month - 1, day + 1);
    let newYear = tomorrow.getFullYear();
    let newMonth = tomorrow.getMonth() + 1;
    let newDate = tomorrow.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);



}

nextDay(1951, 12, 24)