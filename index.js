//slider wrapper//
const sliderWrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-wrapper img');

//button 
// const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
};

const showPrevSlide = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
};

const updateSlider = () => {
   const offset = -currentIndex * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
};
//addEventLisnter
nextButton.addEventListener('click', showNextSlide);
// prevButton.addEventListener('click', showPrevSlide);


// setInterval(showNextSlide, 3000);

  
