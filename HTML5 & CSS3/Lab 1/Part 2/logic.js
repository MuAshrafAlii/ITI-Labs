const redRange = document.querySelector(".redRange"),
  greenRange = document.querySelector(".greenRange"),
  blueRange = document.querySelector(".blueRange"),
  txtToChange = document.querySelector(".txtToChange");

redRange.addEventListener("change", () => {
  txtToChange.style.color = `rgb(${redRange.value},${greenRange.value},${blueRange.value}`;
});

greenRange.addEventListener("change", () => {
  txtToChange.style.color = `rgb(${redRange.value},${greenRange.value},${blueRange.value}`;
});

blueRange.addEventListener("change", () => {
  txtToChange.style.color = `rgb(${redRange.value},${greenRange.value},${blueRange.value}`;
});
