$(function () {
  $("img").draggable();
  $("img").mouseenter(function () {
    $("img").effect("shake", {
      distance: 2,
    });
  });
  $("#droppable").droppable({
    drop: function (event, ui) {
      $("img").css("visibility", "hidden");
    },
  });
});
