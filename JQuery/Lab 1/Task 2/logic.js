$(".imgContainer").on("click", function () {
  $(this).toggleClass("hidden");
  $(this).next().slideToggle();
});
