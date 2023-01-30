const username = document.querySelector(".usernameInput"),
  email = document.querySelector(".emailInput"),
  formElement = document.querySelector(".formElement");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);
  window.open("./output.html", "_blank");
});
