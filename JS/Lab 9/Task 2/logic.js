let set = document.querySelector(".setAlarm"),
  popUp = document.querySelector(".popUp"),
  clear = document.querySelector(".clear"),
  setA = document.querySelector(".set"),
  hrs = document.querySelector(".hrs"),
  min = document.querySelector(".min"),
  sec = document.querySelector(".sec"),
  dayNum = new Date().getDay(),
  days = document.querySelectorAll(".day");

days[dayNum].style.opacity = 1;

function updateWatch() {
  var watch = document.querySelector(".watch");
  watch.innerHTML = new Date().toLocaleTimeString();
}

function showPopup() {
  popUp.style.display = "flex";
}

function setAlarm() {
  period = Number(
    (Number(sec.value) + Number(min.value) * 60 + Number(hrs.value * 3600)) *
      1000
  );

  setTimeout(startAlarm, period);
  start = new Date().toLocaleTimeString();

  clearAlarm();
}
function startAlarm() {
  alert(
    `Alarm
    From: ${start} To: ${new Date().toLocaleTimeString()}
      Period: ${period} ms`
  );
}
function clearAlarm() {
  popUp.style.display = "none";
  sec.value = "";
  hrs.value = "";
  min.value = "";
}

set.addEventListener("click", showPopup);
clear.addEventListener("click", clearAlarm);
setA.addEventListener("click", setAlarm);

setInterval(updateWatch, 1000);
