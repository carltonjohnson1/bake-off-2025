const swiper = new Swiper('.wrapper', {
  loop: true,
  spaceBetween: 30,


//   Autoplay
  autoplay: {
    delay: 5000,
    disableOnIteraction: false,
    pauseOnMouseEnter: true,
  },

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   Responsive breakpoints

  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    }
  }
});

/* 2025 CONTESTANT SWAPPING OF IMAGE FOR TEXT*/


// Getting Text and images for all contestants and putting in variable
const arronInfo = document.querySelector("#aaron-info");
const arronImage = document.querySelector("#aaron-image");

const hassanInfo = document.querySelector("#hassan-info");
const hassanImage = document.querySelector("#hassan-image");

// Getting all btns and putting them in a variable
const aaronBtn = document.querySelector("#aaron-btn");
const aaronCloseButton = document.querySelector(".aaron-close-button");

const hassanBtn = document.querySelector("#hassan-btn");
const hassanCloseButton = document.querySelector(".hassan-close-button");



// Adding event listener to buttons to switch image with text

aaronBtn.addEventListener("click", function() {
  //switching image for text on btn click
  arronImage.style.display = "none";
  arronInfo.style.display = "block";
});

hassanBtn.addEventListener("click", function() {
  //switching image for text on btn click
  hassanImage.style.display = "none";
  hassanInfo.style.display = "block";
});




// Adding event listener to close button to close and switch image with text again


aaronCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  arronImage.style.display = "block";
  arronInfo.style.display = "none";
});


hassanCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  hassanImage.style.display = "block";
  hassanInfo.style.display = "none";
});





