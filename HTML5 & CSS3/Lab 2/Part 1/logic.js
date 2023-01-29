const vid = document.querySelector("video"),
  playBtn = document.querySelector(".playBtn"),
  stopBtn = document.querySelector(".stopBtn"),
  muteBtn = document.querySelector(".muteBtn"),
  fullScrBtn = document.querySelector(".fullScrBtn"),
  begBtn = document.querySelector(".begBtn"),
  fastBckBtn = document.querySelector(".fastBckBtn"),
  endBtn = document.querySelector(".endBtn"),
  fastFwBtn = document.querySelector(".fastFwBtn"),
  timeTxt = document.querySelector(".timeTxt"),
  timeRange = document.querySelector(".timeRange"),
  audioRange = document.querySelector(".audioRange"),
  speedRange = document.querySelector(".speedRange");

playBtn.addEventListener("click", () => {
  vid.play();
});

stopBtn.addEventListener("click", () => {
  vid.pause();
});

vid.addEventListener("timeupdate", () => {
  timeTxt.innerText = `${timeFormat(vid.currentTime)} / ${timeFormat(
    vid.duration
  )}`;

  timeRange.value = (vid.currentTime / vid.duration) * 100;
});

timeRange.addEventListener("change", () => {
  timeRangeValue = timeRange.value;

  vid.currentTime = vid.duration * (timeRangeValue / 100);

  timeTxt.innerText = `${timeFormat(vid.currentTime)} / ${timeFormat(
    vid.duration
  )}`;
});

begBtn.addEventListener("click", () => {
  vid.currentTime = 0;
  timeTxt.innerText = `${timeFormat(vid.currentTime)} / ${timeFormat(
    vid.duration
  )}`;
});

fastBckBtn.addEventListener("click", () => {
  vid.currentTime -= 5;
  timeTxt.innerText = `${timeFormat(vid.currentTime)} / ${timeFormat(
    vid.duration
  )}`;
});

endBtn.addEventListener("click", () => {
  vid.currentTime = vid.duration;
  timeTxt.innerText = `${timeFormat(vid.currentTime)} / ${timeFormat(
    vid.duration
  )}`;
});

fastFwBtn.addEventListener("click", () => {
  vid.currentTime += 5;
  timeTxt.innerText = `${timeFormat(vid.currentTime)} / ${timeFormat(
    vid.duration
  )}`;
});

audioRange.addEventListener("change", () => {
  vid.volume = audioRange.value / 100;
});

muteBtn.addEventListener("click", () => {
  vid.volume = 0;
  audioRange.value = 0;
});

fullScrBtn.addEventListener("click", () => {
  vid.requestFullscreen();
});

speedRange.addEventListener("change", () => {
  vid.playbackRate = speedRange.value;
});

function timeFormat(time) {
  if (time > 60) {
    let minutes, seconds;
    minutes = parseInt(time / 60);
    seconds = (time - minutes) * 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${minutes}:${seconds}`;
  }

  time = Math.trunc(time);

  if (time < 10) {
    time = "0" + time;
  }
  return `00:${time}`;
}
