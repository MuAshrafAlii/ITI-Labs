let email = document.querySelector(".emailInput"),
  password = document.querySelector(".pwInput"),
  loginBtn = document.querySelector(".loginBtn"),
  outputDiv = document.querySelector(".output"),
  formContainerDiv = document.querySelector(".formContainer"),
  form = document.querySelector("form"),
  inputs = document.querySelectorAll("input"),
  containsNumberRegEx = new RegExp("[0-9]+"),
  containsCapsRegEx = new RegExp("[A-Z]+"),
  containsSmallsRegEx = new RegExp("[a-z]+"),
  atLeastEightRegEx = new RegExp("[A-z0-9]{8,}"),
  emailRegEx = new RegExp(`^[A-z0-9]+@[A-z0-9]+\\.[A-z0-9]+$`);

form.addEventListener("submit", submitFunction);

function submitFunction(e) {
  let emValue = email.value;
  let pwValue = password.value;

  e.preventDefault();

  if (!emailRegEx.test(emValue)) {
    showError("Please Enter a valid Email");
  } else if (!containsCapsRegEx.test(pwValue)) {
    showError(
      "Password should contain small, capital and numbers and should be at least 8 characters <br> (You Did not add a capital letter)"
    );
  } else if (!containsSmallsRegEx.test(pwValue)) {
    showError(
      "Password should contain small, capital and numbers and should be at least 8 characters <br> (You Did not add a small letter)"
    );
  } else if (!containsNumberRegEx.test(pwValue)) {
    showError(
      "Password should contain small, capital and numbers and should be at least 8 characters <br> (You Did not add a number)"
    );
  } else if (!atLeastEightRegEx.test(pwValue)) {
    showError(
      "Password should contain small, capital and numbers and should be at least 8 characters <br> (Your password is less than 8 chars)"
    );
  } else {
    outputDiv.style.visibility = "visible";
    outputDiv.style.backgroundColor = "Green";
    outputDiv.innerText = "Welcome";
  }
}

function showError(errorTxt) {
  outputDiv.style.visibility = "visible";
  outputDiv.style.backgroundColor = "darkred";
  outputDiv.innerHTML = errorTxt;
}
