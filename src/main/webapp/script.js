/**
 * 
 */

// profile, wishlist, purchase page add & remove
const profile = document.getElementById('profile');
const myProfile = document.getElementById('myProfile');
const wishlist = document.getElementById('wishlist');
const myWishlist = document.getElementById('myWishlist');
const purchase = document.getElementById('purchase');
const purchaseHistory = document.getElementById('purchaseHistory');

function showSection(sectionToShow, activeButton) {

  myProfile.classList.add('hidden');
  myWishlist.classList.add('hidden');
  purchaseHistory.classList.add('hidden');
  
  profile.classList.remove('border');
  wishlist.classList.remove('border');
  purchase.classList.remove('border');

  sectionToShow.classList.remove('hidden');

  activeButton.classList.add('border','border-slate-950');
  
}

profile.addEventListener('click', function() {
  showSection(myProfile, profile);
});

wishlist.addEventListener('click', function() {
  showSection(myWishlist, wishlist);
});

purchase.addEventListener('click', function() {
  showSection(purchaseHistory, purchase);
});


const iconWishlist = document.getElementById('wishlistIcon');
console.log(iconWishlist);


// carousel banner
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

