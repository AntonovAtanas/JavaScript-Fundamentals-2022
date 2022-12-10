function deposits(input){

    let depositamount = Number(input[0]);
    let termDeposit = Number(input[1]);
    let interest = Number(input[2]);

    let yearinterest = depositamount* (interest / 100);
    let monthlyinterest = yearinterest / 12
    let total = monthlyinterest * termDeposit;
    let totalmoney = total + depositamount

    console.log(totalmoney)
}

deposits(["200 ",

"3 ",

"5.7"])