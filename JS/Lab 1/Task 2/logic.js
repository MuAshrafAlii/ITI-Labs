alert(
  "Welcome to the first release of a calculator that only has a summation feature."
);

var firstNumber = parseInt(prompt("Please enter first number"));
var secondNumber = parseInt(prompt("Please enter second number"));

while (isNaN(firstNumber)) {
  window.alert("Please enter valid first number");
  firstNumber = parseInt(prompt("Please enter first number"));
}

while (isNaN(secondNumber)) {
  window.alert("Please enter valid second number");
  secondNumber = parseInt(prompt("Please enter second number"));
}

alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
