// Task 2

function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function () {
  let perimeter = this.sides * this.sideLength;

  return perimeter;
};

function Square(sidelength) {
  Shape.call(this, "square", 4, sidelength);
}

Square.prototype = Shape.prototype;
Square.prototype.constructor = Square;

Square.prototype.calcArea = function () {
  let area = this.sideLength * this.sideLength;
  return area;
};

let squareObj = new Square(10);

console.log(`Square Perimeter: ${squareObj.calcPerimeter()}`);
console.log(`Square Area: ${squareObj.calcArea()}`);
