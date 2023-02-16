$(".imgContainer").on("click", function () {
  if ($(this).hasClass("hidden")) {
    $(this).removeClass("hidden");
    $(this).next().slideDown();
  } else {
    $(this).addClass("hidden");
    $(this).next().slideUp();
  }
});
