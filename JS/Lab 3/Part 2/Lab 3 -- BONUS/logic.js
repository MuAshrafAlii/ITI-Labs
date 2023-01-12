// Muhammad Ashraf Ali - OS - Lab 3 - Part 2 - Task 3 (BONUS)

var shapes = {
  circle: {
    r: 0,
    area: function () {
      return Math.PI * Math.pow(this.r, 2);
    },
  },

  triangle: {
    b: 0,
    h: 0,
    area: function () {
      return (1 / 2) * this.b * this.h;
    },
  },

  square: {
    a: 0,
    area: function () {
      return Math.pow(this.a, 2);
    },
  },

  rectangle: {
    l: 0,
    w: 0,
    area: function () {
      return this.l * this.w;
    },
  },

  parallelogram: {
    b: 0,
    h: 0,
    area: function () {
      return this.b * this.h;
    },
  },

  trapezium: {
    a: 0,
    b: 0,
    h: 0,
    area: function () {
      return (1 / 2) * (this.a + this.b) * this.h;
    },
  },

  ellipse: {
    a: 0,
    b: 0,
    area: function () {
      return Math.PI * this.a * this.b;
    },
  },
};

var shapeName = prompt(
  "Enter The name of the shape \n (circle - triangle - square - rectangle - parallelogram - trapezium - ellipse)"
);

switch (shapeName) {
  case "circle":
    shapes.circle.r = parseInt(prompt("Please Enter Radius"));
    alert("Area: " + shapes.circle.area());
    break;

  case "triangle":
    shapes.triangle.b = parseInt(prompt("Please Enter Base"));
    shapes.triangle.h = parseInt(prompt("Please Enter Height"));
    alert("Area: " + shapes.triangle.area());
    break;

  case "square":
    shapes.square.a = parseInt(prompt("Please Enter Length"));
    alert("Area: " + shapes.square.area());
    break;

  case "rectangle":
    shapes.rectangle.l = parseInt(prompt("Please Enter Length"));
    shapes.rectangle.w = parseInt(prompt("Please Enter Width"));
    alert("Area: " + shapes.rectangle.area());
    break;

  case "parallelogram":
    shapes.parallelogram.b = parseInt(prompt("Please Enter Base"));
    shapes.parallelogram.h = parseInt(prompt("Please Enter Height"));
    alert("Area: " + shapes.parallelogram.area());
    break;

  case "trapezium":
    shapes.trapezium.a = parseInt(prompt("Please Enter Length 1"));
    shapes.trapezium.b = parseInt(prompt("Please Enter Length 2"));
    shapes.trapezium.h = parseInt(prompt("Please Enter Height"));
    alert("Area: " + shapes.trapezium.area());
    break;

  case "ellipse":
    shapes.ellipse.a = parseInt(prompt("Please Enter 1/2 Minor Axis"));
    shapes.ellipse.b = parseInt(prompt("Please Enter 1/2 Major Axis"));
    alert("Area: " + shapes.ellipse.area());
    break;
}
