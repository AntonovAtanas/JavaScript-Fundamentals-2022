function previousDay (year, month, date) {

    const yesterday = new Date(year, month-1, date-1);
   
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`)
    
}

previousDay (2021, 12, 14);
previousDay (2016, 9, 30)