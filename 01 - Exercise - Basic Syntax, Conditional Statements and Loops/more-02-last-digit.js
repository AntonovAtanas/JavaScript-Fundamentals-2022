function lastDigit(digit) {


    let nam = digit % 10;

    if (nam === 1) {
        console.log("one")
    } else if (nam === 2) {
        console.log("two")
    } else if (nam === 3) {
        console.log("three")
    } else if (nam === 4) {
        console.log("four")
    } else if (nam === 5) {
        console.log("five")
    } else if (nam === 6) {
        console.log("six")
    } else if (nam === 7) {
        console.log("seven")
    } else if (nam === 8) {
        console.log("eight")
    } else if (nam === 9) {
        console.log("nine")
    } else {
        console.log("zero")
    }

}

lastDigit(1)