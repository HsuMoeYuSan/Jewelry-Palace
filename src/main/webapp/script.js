/**
 * 
 */
const slides = document.getElementsByClassName('carouselItem');
let curSlide = 1;

function carousel() {
  if (curSlide > slides.length) {
    curSlide = 1; 
  } else if (curSlide < 1) {
    curSlide = slides.length; 
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[curSlide - 1].style.display = "block";
}

carousel();

function nextSlide() {
  curSlide++;
  carousel();
}

setInterval(nextSlide, 3000);



