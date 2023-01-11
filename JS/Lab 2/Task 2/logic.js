var inputText = prompt("Please enter a text");
var TotalVowels = 0;

for (let letter of inputText) {
  switch (letter) {
    case "a":
    case "e":
    case "o":
    case "i":
    case "u":
      TotalVowels += 1;
  }
}

document.write(`TOTAL VOWELS: ${TotalVowels}`);
