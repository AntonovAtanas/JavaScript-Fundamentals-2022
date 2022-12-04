function winningTicket(input) {

    let tickets = input.split(/\s*,\s*/g); // split by "," when unknown white spaces

    for (const currentTicket of tickets) {
        if (currentTicket.length == 20) {
            let isValidRegex = /[\@\$\#\^]{6,}/g;
            let leftSide = currentTicket.slice(0, currentTicket.length / 2);
            let rightSide = currentTicket.slice(currentTicket.length / 2);
            let isLeftValid = false;
            let isRightValid = false;
            if (isValidRegex.test(leftSide)) {
                isLeftValid = true;
            }
            isValidRegex = /[\@\$\#\^]{6,}/g;
            if (isValidRegex.test(rightSide)) {
                isRightValid = true;
            }

            if (isLeftValid && isRightValid) {
                let match6to9Regex = /(?<match>[\@\$\#\^]{6,})/g;
                let jackpotRegex = /(?<match>[\@\$\#\^]{10})/g;

                if (jackpotRegex.test(currentTicket)) {
                    let jackpot = jackpotRegex.exec(currentTicket);
                    console.log(`ticket "${currentTicket}" - ${jackpot.groups.match.length}${jackpot.groups.match[0]} Jackpot!`)
                } else if (match6to9Regex.test(currentTicket)) {
                    let winner = match6to9Regex.exec(currentTicket);
                    console.log(`ticket "${currentTicket}" - ${winner.groups.match.length}${winner.groups.match[0]}`)
                }

            } else {
                console.log(`ticket "${currentTicket}" - no match`)
            }
        } else {
            console.log('invalid ticket')
        }
    }
}

winningTicket('$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey')