class List {
    constructor() {
        this.arr = [];
        this.size = 0
    }
    add(num) {
        this.arr.push(num);
        this.size++
        this.arr.sort((a, b) => a - b);
    }
    remove(index) {
        if (this.arr[index] !== undefined) {
            this.arr.splice(index, 1);
            this.size--
        } else {
            throw new Error
        }
    }
    get(index) {
        if (this.arr[index] !== undefined) {
            return this.arr[index];
        } else {
            throw new Error
        }
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(10));