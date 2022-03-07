const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const slides = document.querySelector('.main-slide');
const slidesCoount = slides.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCoount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

const changeSlide = (destination) => {
  if (destination === 'up') {
    activeSlideIndex++;
    console.log(activeSlideIndex);
    if (activeSlideIndex === slidesCoount) {
      activeSlideIndex = 0;
    }
  } else if (destination === 'down') {
    activeSlideIndex--;
    console.log(activeSlideIndex);
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCoount - 1;
    }
  }
  const height = container.clientHeight;

  slides.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};
