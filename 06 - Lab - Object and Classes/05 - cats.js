function catClass(input) {

    let inputLength = input.length;

    class Cat {
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }
        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`)
        }
    }

    for (let i = 0; i < inputLength; i++) {
        let catData = input[i].split(' ');
        let catName = catData[0];
        let catAge = Number(catData[1]);

        let catInfo = new Cat(catName, catAge);
        catInfo.meow();
    }
}

catClass(['Mellow 2', 'Tom 5'])