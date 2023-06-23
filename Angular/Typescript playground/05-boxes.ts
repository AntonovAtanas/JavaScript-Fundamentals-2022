class Box<T> {
    private boxes: any[]= []
    public add (element): void {
        this.boxes.push(element)
    };
    public remove(): void {
        this.boxes.pop();
    };

    get count () {
        return this.boxes.length;
    }
}

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);