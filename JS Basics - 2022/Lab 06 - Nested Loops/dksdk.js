function trainTheTr(input) {
    let index = 0;
    let brJ = Number(input[index++]);
    let prez = "";
    let c = 0;
    let sum1 = 0;
    while (prez !== 'Finish') {
        prez = input[index++];
        let sum = 0;
        let sr = 0;        
        for (let i = 0; i < brJ; i++) {
            let ocen = Number(input[index++]);
            sum += ocen;
            sr = sum / brJ;
        }
        console.log(`${prez} - ${sr}.`)
        c++;
        sum1 += sr;
        index++
    }
    console.log(`Student's final assessment is ${(sum1/c).toFixed(2)}.`);
}
trainTheTr(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])