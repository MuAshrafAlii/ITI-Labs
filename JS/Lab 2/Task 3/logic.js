var hour = parseInt(prompt("Please enter an hour in 24 Hours Form"));

while (hour < 0 || hour > 23) {
  alert("Please Enter an Hour Between 0 and 23");
  hour = parseInt(prompt("Please enter an hour in 24 Hours Form"));
}

function showHour() {
  if (hour < 12 && hour >= 0) {
    if (hour == 0) {
      hour = 12;
    }
    document.write(`${hour} AM`);
    return;
  }

  if (hour >= 12 && hour < 24) {
    if (hour != 12) {
      hour -= 12;
    }
    document.write(`${hour} PM`);
  }
}

showHour();
