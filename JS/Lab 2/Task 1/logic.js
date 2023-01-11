do {
  var age = prompt("Please enter your age");

  while (parseInt(age) <= 0) {
    window.alert("Please enter valid age");
    age = parseInt(prompt("Please enter your age"));
  }

  function showStatus() {
    if (age > 0 && age < 11) {
      document.write("You are a Child");
    }

    if (age > 10 && age < 19) {
      document.write("You are a Teenager");
    }

    if (age > 18 && age < 51) {
      document.write("You are a Grown up");
    }

    if (age > 50) {
      document.write("You are a Old");
    }
  }

  showStatus();
} while (age != null);
