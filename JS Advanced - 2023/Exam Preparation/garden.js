class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        }
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    };

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(element => element['plantName'] === plantName);
        let index = this.plants.indexOf(plant);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };

        if (this.plants[index].ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        };

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        };

        this.plants[index].ripe = true;
        this.plants[index].quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    };

    harvestPlant(plantName) {
        let plant = this.plants.find(element => element['plantName'] === plantName);
        let index = this.plants.indexOf(plant);

        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        };

        if (this.plants[index].ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        };
        this.storage.push({ plantName: plant['plantName'], quantity: plant['quantity'] })
        this.spaceAvailable += plant['spaceRequired']; // ?
        this.plants.splice(index, 1);
        return `The ${plantName} has been successfully harvested.`
    };

    generateReport() {
        let result = [];
        result.push(`The garden has ${this.spaceAvailable} free space left.`);

        this.plants.sort((a, b) => a['plantName'].localeCompare(b['plantName']));
        let res = 'Plants in the garden: '
        let arrRes = [];
        for (const currentPlant of this.plants) {
            arrRes.push(currentPlant['plantName']);
        }
        res += arrRes.join(', ');
        result.push(res);

        if (this.storage.length === 0){
            result.push(`Plants in storage: The storage is empty.`);
        } else {
            let res1 = 'Plants in storage: ';
            let arrRes1 = [];
            for (const currentPlant of this.storage) {
                arrRes1.push(`${currentPlant['plantName']} (${currentPlant['quantity']})`);
            };
            res1 += arrRes1.join(', ');
            result.push(res1);
        }

        return result.join('\n')
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)


