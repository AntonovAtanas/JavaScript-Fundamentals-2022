class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space == 0) {
            throw new Error("Not enough space in the cellar.");
        }

        this.wines.push({ wineName, wineType, price, paid: false });
        this.space -= 1;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    };

    payWineBottle(wineName, price) {
        let isFound = this.wines.find(element => element['wineName'] === wineName);
        let index = this.wines.indexOf(isFound);

        if (!isFound) {
            throw new Error(`${wineName} is not in the cellar.`)
        };

        if (isFound.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        };

        this.wines[index].paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    };

    openBottle(wineName) {
        let isFound = this.wines.find(element => element['wineName'] === wineName);
        let index = this.wines.indexOf(isFound);

        if (!isFound) {
            throw new Error("The wine, you're looking for, is not found.")
        };

        if (isFound.paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        };

        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`
    };

    cellarRevision(wineType) {
        let res = [];
        if (wineType == undefined) { // ?

            res.push(`You have space for ${this.space} bottles more.`);
            res.push(`You paid ${this.bill}$ for the wine.`);

            this.wines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            for (const currentWine of this.wines) {
                if (currentWine.paid) {
                    res.push(`${currentWine.wineName} > ${currentWine.wineType} - Has Paid.`)
                } else {
                    res.push(`${currentWine.wineName} > ${currentWine.wineType} - Not Paid.`)
                }
            };
            return res.join('\n')
        } else {
            for (const currentWine of this.wines) {
                if (currentWine.wineType === wineType) {
                    if (currentWine.paid) {
                        res.push(`${currentWine.wineName} > ${currentWine.wineType} - Has Paid.`)
                    } else {
                        res.push(`${currentWine.wineName} > ${currentWine.wineType} - Not Paid.`)
                    }
                }
            }

            if (res.length == 0) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
            return res.join('\n')
        }
    }
}

const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
console.log(selection.cellarRevision('Rose'));





// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.
