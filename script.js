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

const iainInfo = document.querySelector("#iain-info");
const iainImage = document.querySelector("#iain-image");

const jasmineInfo = document.querySelector("#jasmine-info");
const jasmineImage = document.querySelector("#jasmine-image");

const jessikaInfo = document.querySelector("#jessika-info");
const jessikaImage = document.querySelector("#jessika-image");

const leightonInfo = document.querySelector("#leighton-info");
const leightonImage = document.querySelector("#leighton-image");

const lesleyInfo = document.querySelector("#lesley-info");
const lesleyImage = document.querySelector("#lesley-image");

const nadiaInfo = document.querySelector("#nadia-info");
const nadiaImage = document.querySelector("#nadia-image");

const nataliiaInfo = document.querySelector("#nataliia-info");
const nataliiaImage = document.querySelector("#nataliia-image");

const puiManInfo = document.querySelector("#pui-man-info");
const puiManImage = document.querySelector("#pui-man-image");

const tobyInfo = document.querySelector("#toby-info");
const tobyImage = document.querySelector("#toby-image");

const tomInfo = document.querySelector("#tom-info");
const tomImage = document.querySelector("#tom-image");


// Getting all btns and putting them in a variable

const aaronBtn = document.querySelector("#aaron-btn");
const aaronCloseButton = document.querySelector(".aaron-close-button");

const hassanBtn = document.querySelector("#hassan-btn");
const hassanCloseButton = document.querySelector(".hassan-close-button");

const iainBtn = document.querySelector("#iain-btn");
const iainCloseButton = document.querySelector(".iain-close-button");


const jasmineBtn = document.querySelector("#jasmine-btn");
const jasmineCloseButton = document.querySelector(".jasmine-close-button");


const jessikaBtn = document.querySelector("#jessika-btn");
const jessikaCloseButton = document.querySelector(".jessika-close-button");


const leightonBtn = document.querySelector("#leighton-btn");
const leightonCloseButton = document.querySelector(".leighton-close-button");


const lesleyBtn = document.querySelector("#lesley-btn");
const lesleyCloseButton = document.querySelector(".lesley-close-button");


const nadiaBtn = document.querySelector("#nadia-btn");
const nadiaCloseButton = document.querySelector(".nadia-close-button");


const nataliiaBtn = document.querySelector("#nataliia-btn");
const nataliiaCloseButton = document.querySelector(".nataliia-close-button");


const puiManBtn = document.querySelector("#pui-man-btn");
const puiManCloseButton = document.querySelector(".pui-man-close-button");


const tobyBtn = document.querySelector("#toby-btn");
const tobyCloseButton = document.querySelector(".toby-close-button");


const tomBtn = document.querySelector("#tom-btn");
const tomCloseButton = document.querySelector(".tom-close-button");




// Adding event listener to buttons to switch image with text

aaronBtn.addEventListener("click", function() {
  //switching image for text on btn click
  arronImage.style.display = "none";
  arronInfo.style.display = "block";
  aaronBtn.style.background = "#000";
});

hassanBtn.addEventListener("click", function() {
  //switching image for text on btn click
  hassanImage.style.display = "none";
  hassanInfo.style.display = "block";
  hassanBtn.style.background = "#000";
});

iainBtn.addEventListener("click", function() {
  //switching image for text on btn click
  iainImage.style.display = "none";
  iainInfo.style.display = "block";
  iainBtn.style.background = "#000";
});

jasmineBtn.addEventListener("click", function() {
  //switching image for text on btn click
  jasmineImage.style.display = "none";
  jasmineInfo.style.display = "block";
  jasmineBtn.style.background = "#000";
});

jessikaBtn.addEventListener("click", function() {
  //switching image for text on btn click
  jessikaImage.style.display = "none";
  jessikaInfo.style.display = "block";
  jessikaBtn.style.background = "#000";
});

leightonBtn.addEventListener("click", function() {
  //switching image for text on btn click
  leightonImage.style.display = "none";
  leightonInfo.style.display = "block";
  leightonBtn.style.background = "#000";
});

lesleyBtn.addEventListener("click", function() {
  //switching image for text on btn click
  lesleyImage.style.display = "none";
  lesleyInfo.style.display = "block";
  lesleyBtn.style.background = "#000";
});

nadiaBtn.addEventListener("click", function() {
  //switching image for text on btn click
  nadiaImage.style.display = "none";
  nadiaInfo.style.display = "block";
  nadiaBtn.style.background = "#000";
});

nataliiaBtn.addEventListener("click", function() {
  //switching image for text on btn click
  nataliiaImage.style.display = "none";
  nataliiaInfo.style.display = "block";
  nataliiaBtn.style.background = "#000";
});

puiManBtn.addEventListener("click", function() {
  //switching image for text on btn click
  puiManImage.style.display = "none";
  puiManInfo.style.display = "block";
  puiManBtn.style.background = "#000";
});

tobyBtn.addEventListener("click", function() {
  //switching image for text on btn click
  tobyImage.style.display = "none";
  tobyInfo.style.display = "block";
  tobyBtn.style.background = "#000";
});

tomBtn.addEventListener("click", function() {
  //switching image for text on btn click
  tomImage.style.display = "none";
  tomInfo.style.display = "block";
  tomBtn.style.background = "#000";
});




// Adding event listener to close button to close and switch image with text again


aaronCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  arronImage.style.display = "block";
  arronInfo.style.display = "none";
  aaronBtn.style.background = "#6366f1";
});


hassanCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  hassanImage.style.display = "block";
  hassanInfo.style.display = "none";
  hassanBtn.style.background = "#6366f1";
});


iainCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  iainImage.style.display = "block";
  iainInfo.style.display = "none";
  iainBtn.style.background = "#6366f1";
});


jasmineCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  jasmineImage.style.display = "block";
  jasmineInfo.style.display = "none";
  jasmineBtn.style.background = "#6366f1";
});


jessikaCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  jessikaImage.style.display = "block";
  jessikaInfo.style.display = "none";
  jessikaBtn.style.background = "#6366f1";
});


leightonCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  leightonImage.style.display = "block";
  leightonInfo.style.display = "none";
  leightonBtn.style.background = "#6366f1";
});


lesleyCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  lesleyImage.style.display = "block";
  lesleyInfo.style.display = "none";
  lesleyBtn.style.background = "#6366f1";
});


nadiaCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  nadiaImage.style.display = "block";
  nadiaInfo.style.display = "none";
  nadiaBtn.style.background = "#6366f1";
});


nataliiaCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  nataliiaImage.style.display = "block";
  nataliiaInfo.style.display = "none";
  nataliiaBtn.style.background = "#6366f1";
});


puiManCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  puiManImage.style.display = "block";
  puiManInfo.style.display = "none";
  puiManBtn.style.background = "#6366f1";
});


tobyCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  tobyImage.style.display = "block";
  tobyInfo.style.display = "none";
  tobyBtn.style.background = "#6366f1";
});

tomCloseButton.addEventListener("click", function() {
  //switching text for image again when close button clicked
  tomImage.style.display = "block";
  tomInfo.style.display = "none";
  tomBtn.style.background = "#6366f1";
});







