import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  slideInterval: any = '';

  next() {
    let currentImg = document.querySelector('.imgContainer.show');
    if (!currentImg?.nextElementSibling) {
      return;
    }
    currentImg?.classList.toggle('show');
    currentImg?.nextElementSibling?.classList.toggle('show');
  }

  prev() {
    let currentImg = document.querySelector('.imgContainer.show');
    if (!currentImg?.previousElementSibling) {
      return;
    }
    currentImg?.classList.toggle('show');
    currentImg?.previousElementSibling?.classList.toggle('show');
  }

  slide() {
    this.slideInterval = setInterval(() => {
      let allImgs = document.querySelectorAll('.imgContainer');
      let currentImg = document.querySelector('.imgContainer.show');
      currentImg?.classList.toggle('show');
      if (!currentImg?.nextElementSibling) {
        allImgs[0].classList.toggle('show');
        return;
      }
      currentImg?.nextElementSibling?.classList.toggle('show');
    }, 500);
  }

  stop() {
    clearInterval(this.slideInterval);
  }
}
