function dayOfWeek(input) {
    // firstWay
    // switch (input) {
    //     case 1: console.log(`Monday`); break;
    //     case 2: console.log(`Tuesday`); break;
    //     case 3: console.log(`Wednesday`); break;
    //     case 4: console.log(`Thursday`); break;
    //     case 5: console.log(`Friday`); break;
    //     case 6: console.log(`Saturday`); break;
    //     case 7: console.log(`Sunday`); break;


    //     default: console.log(`Invalid day!`)
    //         break;
    // }

    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]



    if (input < 1 || input > 7) {
        console.log('Invalid day!')
    } else {
        console.log(days[input - 1])
    }

}

dayOfWeek(8)