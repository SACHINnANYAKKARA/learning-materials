(function () {

    'use strict'

    function Shape2d() {

        return {

            type: this.constructor.name,
            sides: []

        };
    }

    function Rectangle(width, heigth) {

        var shape = Shape2d.call(this);

        shape.sides.push(width, heigth, width, heigth);

        shape.getArea = function () {

            return shape.sides[0] * shape.sides[1];

        }

        return shape;

    }

    function Square(sidesLength) {
        return Rectangle.call(this, sidesLength, sidesLength);
    }

    var myReact = new Rectangle(5, 4);

    console.log(myReact.type);
    console.log(myReact.sides.length);
    console.log(myReact.getArea());

    function Square(sidesLength) {
        this.sides = [sidesLength, sidesLength, sidesLength, sidesLength];
    }

    Square.prototype = new Shape2d();
    Square.prototype.constructor = Square;

}());