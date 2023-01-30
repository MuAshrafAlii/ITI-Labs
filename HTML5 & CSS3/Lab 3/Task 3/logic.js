var sum = document.getElementById("calcSum");
var bg = document.getElementById("changeBck");
var worker = new Worker("worker.js");
console.log(sum, bg);

sum.onclick = function () {
  worker.postMessage("");
};

worker.onmessage = function (message) {
  alert(message.data);
};

bg.onclick = function () {
  if (document.body.style.background !== "green") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "blue";
  }
};
