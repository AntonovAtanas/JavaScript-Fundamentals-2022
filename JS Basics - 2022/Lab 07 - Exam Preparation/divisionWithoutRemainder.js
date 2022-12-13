function division(input) {


    let totalNumbers = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;


    for (let i = 1; i <= totalNumbers; i++) {

        let number = Number(input[i])

        if (number % 2 === 0) {
            p1 += 1;
        } if (number % 3 === 0) {
            p2 += 1;
        } if (number % 4 === 0) {
            p3 += 1;
        }


    }

    console.log(`${((p1 / totalNumbers) * 100).toFixed(2)}%`)
    console.log(`${((p2 / totalNumbers) * 100).toFixed(2)}%`)
    console.log(`${((p3 / totalNumbers) * 100).toFixed(2)}%`)
}

division(["3",
"3",
"6",
"9"])

