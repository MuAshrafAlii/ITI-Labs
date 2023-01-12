// Muhammad Ashraf Ali - OS - Lab 3 - Part 1 - Task 2
// operation (sum,multi,subtract,division,moduls)

var firstNumber = parseInt(prompt("Please enter your First Number"));

do {
  var operation = prompt(
    "Please enter your Operation from the choices \n (sum, multi, subtract, division, moduls)"
  );
  var secondNumber = parseInt(prompt("Please enter your Second Number"));

  switch (operation) {
    case "sum":
      alert(
        `${firstNumber} + ${secondNumber} =  ${firstNumber + secondNumber}`
      );
      firstNumber = firstNumber + secondNumber;
      break;

    case "multi":
      alert(
        `${firstNumber} * ${secondNumber} =  ${firstNumber * secondNumber}`
      );
      firstNumber = firstNumber * secondNumber;
      break;

    case "subtract":
      alert(
        `${firstNumber} - ${secondNumber} =  ${firstNumber - secondNumber}`
      );
      firstNumber = firstNumber - secondNumber;
      break;

    case "division":
      alert(
        `${firstNumber} / ${secondNumber} =  ${firstNumber / secondNumber}`
      );
      firstNumber = firstNumber / secondNumber;
      break;

    case "moduls":
      alert(
        `${firstNumber} % ${secondNumber} =  ${firstNumber % secondNumber}`
      );
      firstNumber = firstNumber % secondNumber;
      break;
  }
} while (operation != null);
