abstract class Melon {
    public weigth: number;
    public melonSort: string;
    public elementIndex: number;
    public element: string;
    constructor(weight: number, melonSort: string) { 
        this.weigth = weight;
        this.melonSort = melonSort;
        this.elementIndex = weight * melonSort.length
    }

    toString(): string {
        return `
        Element: ${this.element}
        Sort: ${this.melonSort}
        Element Index: ${this.elementIndex}
        `
    }
};

class Watermelon extends Melon{
    constructor(weight: number, melonSort: string){
        super(weight, melonSort)
        this.element = 'Water';
    }
}

class Firemelon extends Melon{
    constructor(weight: number, melonSort: string){
        super(weight, melonSort)
        this.element = 'Fire';
    }
}

class Earthmelon extends Melon{
    constructor(weight: number, melonSort: string){
        super(weight, melonSort)
        this.element = 'Earth';
    }
}

class Airmelon extends Melon{
    constructor(weight: number, melonSort: string){
        super(weight, melonSort)
        this.element = 'Air';
    }
};

class Melolemonmelon extends Airmelon {
    public elements = ['Water', 'Fire', 'Earth', 'Air'];
    constructor(weight: number, melonSort: string){
        super(weight, melonSort);
    }

    morph(): void {
        const currentElement = this.elements.shift()!;
        this.elements.push(currentElement);

        this.element = currentElement;
    }
}


const earth = new Melolemonmelon(59, 'Small');
earth.morph();
console.log(earth.toString());
earth.morph();
console.log(earth.toString());


