(function () {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        if (this.toString() === '') {
            return true;
        }
        return false;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) { // < or <= ?
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n)
        }

        let lastIndex = this.substring(0, n - 2).lastIndexOf(" ");

        if (!this.toString().includes(' ')) {
            return this.slice(0, n - 3) + '...'
        } else {
            return this.substring(0, lastIndex) + "...";
        }
    }

    String.format = function (string, ...params){
        params.forEach((param, index) => {
            string = string.replace(`{${index}}`, param);
        });
        return string
    }

}())

let str = 'my string';

str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}', 'dog');
console.log(str)