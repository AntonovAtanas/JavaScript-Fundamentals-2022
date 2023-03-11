class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    toString() {
        if (this.innerLength == 0) {
            return '...'
        }
        let str = this.innerString;

        if (this.innerString.length > this.innerLength) {
            str = str.slice(0, this.innerString.length - this.innerLength);
            return str + '...'
        } else {
            return this.innerString
        }
    }

    decrease(num) {
        this.innerLength -= num;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    increase(num) {
        this.innerLength += num;
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test