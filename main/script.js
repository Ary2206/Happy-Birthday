const slideFrame = document.getElementById('slideFrame');
const nextBtn = document.getElementById('nextBtn');
const replayBtn = document.getElementById('replayBtn');

const slides = [
  '../slide1/birthday-cake.html',
  '../slide2/index.html',
  '../slide3/script.html',
  '../slide4/index.html'
];

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide < slides.length) {
    slideFrame.src = slides[currentSlide];

    if (currentSlide === slides.length - 1) {
      nextBtn.style.display = 'none';
      replayBtn.style.display = 'inline';
    }
  }
});

replayBtn.addEventListener('click', () => {
  currentSlide = 0;
  slideFrame.src = slides[currentSlide];
  replayBtn.style.display = 'none';
  nextBtn.style.display = 'inline';
});