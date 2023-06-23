var Box = /** @class */ (function () {
    function Box() {
        this.boxes = [];
    }
    Box.prototype.add = function (element) {
        this.boxes.push(element);
    };
    ;
    Box.prototype.remove = function () {
        this.boxes.pop();
    };
    ;
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
