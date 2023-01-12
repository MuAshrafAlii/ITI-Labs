// Muhammad Ashraf Ali - OS - Lab 3 - Part 3 - Task 1
// 10 Object Predefined Methods

// #1 Object.assign -> Copies all properties from source object to target object
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

// #2 Object.create -> Create New Object using existing object
const person = {
  isHuman: false,
};
const me = Object.create(person);

// #3 Object.defineProperties -> Defines/Modifies Properties
const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

// #4 Object.entries => return arrays of key/values
const object2 = {
  a: "somestring",
  b: 42,
};
console.log(Object.entries(object2));

// #5 Object.hasOwn => Returns true if it is the object's property (Not inherited)
const object3 = {
  prop: "exists",
};
console.log(Object.hasOwn(object3, "prop")); // True

// #6 Object.is => Determines if two values are the same
Object.is(3, 3);

// #7 Object.keys => returns array of property names
const object4 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.keys(object4));

// #8 Object.values => returns array of object property values
const object5 = {
  a: "somestring",
  b: 42,
  c: false,
};
console.log(Object.values(object5));

// #9 Object.freeze => makes existing properties non-writable and non-configurable
const obj = {
  prop: 42,
};
Object.freeze(obj);
obj.prop = 33;
console.log(obj.prop); // 42

// #10 Object.isFrozen => determines if an object is frozen.
const object6 = {
  property1: 42,
};
console.log(Object.isFrozen(object6)); // false
