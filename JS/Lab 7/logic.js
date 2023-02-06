let username = document.querySelector(".unInput"),
  password = document.querySelector(".pwInput"),
  loginBtn = document.querySelector(".loginBtn"),
  outputDiv = document.querySelector(".output"),
  formContainerDiv = document.querySelector(".formContainer"),
  form = document.querySelector("form"),
  inputs = document.querySelectorAll("input");

document.body.style.cssText = `
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: darkgreen;
  `;

outputDiv.style.cssText = `
  width: 40%;
  border-radius: 5px;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 10px;
  visibility: hidden;
  `;

formContainerDiv.style.cssText = `
  margin-top: 20px;
  height: 40vh;
  width: 50%;
  `;

form.style.cssText = `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color:white;
  `;

for (inpu of inputs) {
  inpu.style.cssText = `
    padding: 10px;
  font-size: 20px;
    `;
}

loginBtn.style.cssText = `
  font-size: 20px;
  padding: 10px;
  background: #00f800;
  width: 60%;
  cursor: pointer;
  border: none;
  outline: none;
`;

form.addEventListener("submit", submitFunction);

function submitFunction(e) {
  let unValue = username.value;
  let pwValue = password.value;

  e.preventDefault();

  if (unValue == "admin" && pwValue == "123") {
    outputDiv.style.visibility = "visible";
    outputDiv.style.backgroundColor = "Green";
    outputDiv.innerText = "Welcome";
  } else {
    outputDiv.style.visibility = "visible";
    outputDiv.style.backgroundColor = "darkred";
    outputDiv.innerHTML = "Not Registered";
  }
}
