const formElement = document.querySelector(".form"),
  allTasksContainer = document.querySelector(".allTasksContainer"),
  doneBtn = document.querySelectorAll(".doneMark"),
  deletBtn = document.querySelectorAll(".deleteMark"),
  taskNameInput = document.querySelector(".taskNameInput");

formElement.addEventListener("submit", addTask);
document.addEventListener("click", doneHandler); //DoneMark Handler
document.addEventListener("click", removeHandler); //RemoveMark Handler

function addTask(e) {
  if (taskNameInput.value == "") return;
  e.preventDefault();
  let task = document.createElement("div");
  task.classList.add("taskContainer");
  task.innerHTML = `
    <div class="taskName">${taskNameInput.value}</div>
          <div class="marksContainer">
            <div class="doneMark">&#x2714;</div>
            <div class="deleteMark">x</div>
          </div>
    `;

  allTasksContainer.appendChild(task);
  taskNameInput.value = "";
}

function doneHandler(e) {
  let doneMark = e.target;
  if (e.target.classList.contains("doneMark")) {
    let container = doneMark.parentElement.parentElement;
    let taskText = doneMark.parentElement.parentElement.firstElementChild;

    if (!container.classList.contains("done")) {
      container.classList.add("done");
      taskText.innerText += " - Completed";
    }
  }
}

function removeHandler(e) {
  let removeMark = e.target;
  if (e.target.classList.contains("deleteMark")) {
    let container = removeMark.parentElement.parentElement;
    container.remove();
  }
}
