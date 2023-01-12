// Muhammad Ashraf Ali - OS - Lab 3 - Part 1 - Task 1
// username = “admin” and password = “421$$”

var userName = prompt("Please enter your username");
var password = prompt("Please enter your password");

if (userName !== "admin") {
  alert("Wrong Username");
}
if (password !== "421$$") {
  alert("Wrong Password");
}

if (userName == "admin" && password == "421$$") {
  alert("Welcome login success");
}
