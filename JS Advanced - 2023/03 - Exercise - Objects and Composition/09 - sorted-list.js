function createSortedList() {

    let list = {
        add(num) {
            this.result.push(num);
            this.size++
            this.result.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.size) {
                this.result.splice(index, 1);
                this.size--
            }
            this.result.sort((a, b) => a - b);
        },
        get(index) {
            if (index >= 0 && index < this.size) {
                return this.result[index];
            }
            
        },
        size: 0,
        result: []
    }

    return list;
}

let list = createSortedList();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(7));

list.remove(1);

console.log(list.get(1));
console.log(list.size)