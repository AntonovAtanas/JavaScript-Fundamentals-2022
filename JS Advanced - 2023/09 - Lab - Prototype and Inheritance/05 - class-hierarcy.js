function classHierarcy() {

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }
        converter(num) {
            if (this.units === 'mm') {
                return num *= 10
            } else if (this.units === 'm') {
                return num /= 100;
            } else {
                return num
            }
        }

        changeUnits(value) {
            this.units = value;
        };
        toString() {
            return `Figures units: ${units}`
        }

    };

    class Circle extends Figure {
        constructor(radius, units) {
            super(units)
            this._radius = radius;
        }
        get area() {
            this.radius = this.converter(this._radius);
            return Math.PI * this.radius * this.radius;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get area() {
            this.width = this.converter(this._width);
            this.height = this.converter(this._height);
            return this.width * this.height;
        };
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    return { Figure, Circle, Rectangle }
}

classHierarcy()


