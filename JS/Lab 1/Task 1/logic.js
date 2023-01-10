var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var birthDate = parseInt(prompt("Please enter your birth date"));

while (firstName.length <= 0 || firstName == null) {
  window.alert("Please enter valid First Name");
  firstName = prompt("Please enter your first name");
}

while (lastName.length <= 0 || lastName == null) {
  window.alert("Please enter valid Last Name");
  lastName = prompt("Please enter your last name");
}

while (isNaN(birthDate)) {
  window.alert("Please enter valid birth date");
  birthDate = parseInt(prompt("Please enter your birth date"));
}

document.write(
  `Welcome ${firstName} ${lastName} You are ${2023 - birthDate} Years Old`
);
