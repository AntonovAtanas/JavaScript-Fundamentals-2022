function coins(input) {

    change = Number(input[0])
    change = Math.round(change * 100)

    let totalCoins = 0;

    while (change > 0) {

        if (change >= 200) {
            change -= 200
        } else if (change >= 100) {
            change -= 100
        } else if (change >= 50) {
            change -= 50
        } else if (change >= 20) {
            change -= 20
        } else if (change >= 10) {
            change -= 10
        } else if (change >= 5) {
            change -= 5
        } else if (change >= 2) {
            change -= 2
        } else if (change >= 1) {
            change -= 1
        }

        totalCoins ++
    }

    console.log(totalCoins)
}

coins(["1.23"])