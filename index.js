//slider wrapper//
const sliderWrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-wrapper img');

let currentIndex = 0;

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
};

const updateSlider = () => {
   const offset = -currentIndex * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
};

setInterval(showNextSlide, 3000);

  
