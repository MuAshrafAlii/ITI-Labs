const dayNum = new Date().getDay(),
  popup = document.querySelector(".popup"),
  setAlarmBtn = document.querySelector(".setAlarmBtn"),
  setBtn = document.querySelector(".setBtn"),
  clearBtn = document.querySelector(".clearBtn");

switch (dayNum) {
  case 0:
    day.innerHTML = "SUNDAY";
    break;
  case 1:
    day.innerHTML = "MONDAY";
    break;
  case 2:
    day.innerHTML = "TUESDAY";
    break;
  case 3:
    day.innerHTML = "WEDNESDAY";
    break;
  case 4:
    day.innerHTML = "THURSDAY";
    break;
  case 5:
    day.innerHTML = "FRIDAY";
    break;
  case 6:
    day.innerHTML = "SATURDAY";
    break;
}

function updateWatch() {
  watch.innerHTML = new Date().toLocaleTimeString();
}

function displayPopup() {
  popup.style.display = "block";
}

function startAlarm() {
  alert(
    `Alarm
    From: ${start} To: ${new Date().toLocaleTimeString()}
      Period: ${period} ms`
  );
}

function setAlarm() {
  period = Number(
    (Number(sec.value) + Number(min.value) * 60 + Number(hr.value * 3600)) *
      1000
  );

  setTimeout(startAlarm, period);
  start = new Date().toLocaleTimeString();

  clearAlarm();
}

function clearAlarm() {
  sec.value = "";
  min.value = "";
  hr.value = "";
  popup.style.display = "none";
}

setAlarmBtn.addEventListener("click", displayPopup);
setBtn.addEventListener("click", setAlarm);
clearBtn.addEventListener("click", clearAlarm);

setInterval(updateWatch, 1000);
