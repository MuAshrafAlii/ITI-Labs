// Muhammad Ashraf Ali - OS - Lab 3 - Part 3 - Task 2
// 10 Array Predefined Methods

const array1 = [5, 12, 8, 130, 44];
const array2 = ["d", "e", "f"];

// #1 At => takes an integer value and returns the item at that index
array1.flat(0);

// #2 concat => merge two or more arrays
array1.concat(array2);

// #3 isArray => determines whether the passed value is an Array
Array.isArray(array1);

// #4 find => returns the first element in the provided array that satisfies the provided testing function
array1.find((element) => element > 10);

// #5 unshift => adds one or more elements to the beginning of an array
array1.unshift(4, 5);

// #6 sort => sorts the elements of an array
array1.sort();

// #7 shift =>  removes the first element from an array
array1.shift();

// #8 push => adds one or more elements to the end of an array
array1.push(88);

// #9 pop => removes the last element from an array
array1.pop();

// #10 toString => returns a string representing the specified array and its elements
array1.toString();
