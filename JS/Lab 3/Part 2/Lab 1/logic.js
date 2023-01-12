// Muhammad Ashraf Ali - OS - Lab 3 - Part 2 - Task 1

var count = parseInt(prompt("how many number to get the sum of"));
var numbers = [];

for (i = 0; i < count; i++) {
  inputNumber = parseInt(prompt("Please enter a number"));
  numbers.push(inputNumber);
}

function total(arr) {
  arrElementsText = "";
  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  arr.forEach((element) => (arrElementsText += `${element}, `));
  alert(`The Sum of ${arrElementsText} = ${total}`);
}

function avg(arr) {
  arrElementsText = "";
  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const size = arr.length;

  arr.forEach((element) => (arrElementsText += `${element}, `));

  alert(`The Average of ${arrElementsText} = ${total / size}`);
}

total(numbers);
avg(numbers);
