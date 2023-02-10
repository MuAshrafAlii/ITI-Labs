const prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  imgs = document.querySelectorAll("img");

function nextHandler() {
  imgs.forEach((img) => {
    imgNumber = parseInt(img.src.charAt(img.src.indexOf(".jpg") - 1));
    if (imgNumber == 1) {
      imgNumber = imgs.length + 1;
    }
    img.src = `./imgs/${imgNumber - 1}.jpg`;
  });
}

function prevHandler() {
  imgs.forEach((img) => {
    imgNumber = parseInt(img.src.charAt(img.src.indexOf(".jpg") - 1));
    if (imgNumber == imgs.length) {
      imgNumber = 0;
    }
    img.src = `./imgs/${imgNumber + 1}.jpg`;
  });
}

nextBtn.addEventListener("click", nextHandler);
prevBtn.addEventListener("click", prevHandler);

setInterval(nextHandler, 2000);
