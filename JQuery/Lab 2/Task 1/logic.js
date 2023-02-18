$(".addBtn").on("click", (e) => {
  if ($(".taskNameInput").val() == "") return;
  e.preventDefault();

  $(".allTasksContainer").append(`<div class="taskContainer"></div>`);
  $(".taskContainer")
    .last()
    .append(`<div class ="taskName">${$(".taskNameInput").val()}</div>`);

  $(".taskContainer").last().append(`<div class ="marksContainer"></div>`);
  $(".marksContainer").last().append(`<div class="doneMark">&#x2714;</div>`);
  $(".marksContainer").last().append(`<div class="deleteMark">x</div>`);

  $(".taskNameInput")[0].value = "";
});

$(".allTasksContainer").on("click", ".doneMark", function (e) {
  $(this).parent().parent().addClass("done");
});

$(".allTasksContainer").on("click", ".deleteMark", function (e) {
  $(this).parent().parent().remove();
});
