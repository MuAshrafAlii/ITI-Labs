function imgMove() {
  if ($(".active").next().length == 0) {
    $(".active").first().removeClass("active");
    $(".imgContainer").first().addClass("active");
  } else {
    $(".active").next().addClass("active");
    $(".active").first().removeClass("active");
  }
}

const imgMoveInterval = setInterval(imgMove, 1000);

$(".btn").on("click", function () {
  clearInterval(imgMoveInterval);
});
