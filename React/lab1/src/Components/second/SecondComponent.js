import "./SecondComponent.css";

function SecondComponent() {
  let slideInterval;
  let next = function (e) {
    let currentImg = document.querySelector(".imgContainer.show");
    if (!currentImg?.nextElementSibling) {
      return;
    }
    currentImg?.classList.toggle("show");
    currentImg?.nextElementSibling?.classList.toggle("show");
  };

  let prev = function (e) {
    let currentImg = document.querySelector(".imgContainer.show");
    if (!currentImg?.previousElementSibling) {
      return;
    }
    currentImg?.classList.toggle("show");
    currentImg?.previousElementSibling?.classList.toggle("show");
  };

  let slide = function (e) {
    slideInterval = setInterval(() => {
      let allImgs = document.querySelectorAll(".imgContainer");
      let currentImg = document.querySelector(".imgContainer.show");
      currentImg?.classList.toggle("show");
      if (!currentImg?.nextElementSibling) {
        allImgs[0].classList.toggle("show");
        return;
      }
      currentImg?.nextElementSibling?.classList.toggle("show");
    }, 500);
  };

  let stop = function (e) {
    clearInterval(slideInterval);
  };

  return (
    <div>
      <div class="sliderContainer">
        <div class="allImgs">
          <div class="imgContainer show">
            <img src="./imgs/1.jpg" alt="img1" />
          </div>

          <div class="imgContainer">
            <img src="./imgs/2.jpg" alt="img2" />
          </div>

          <div class="imgContainer">
            <img src="./imgs/3.jpg" alt="img3" />
          </div>

          <div class="imgContainer">
            <img src="./imgs/4.jpg" alt="img4" />
          </div>
        </div>

        <div class="btnsContainer">
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
          <button onClick={slide}>Slide</button>
          <button onClick={stop}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default SecondComponent;
