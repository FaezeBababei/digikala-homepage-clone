var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*secod slider*/
var secondslider = new Swiper(".mysecondslider", {
  slidesPerView: 7,
  spaceBetween: 3,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*third slider*/
var thirdslider = new Swiper(".mythirdslider", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 0,
  
});
var forthslider = new Swiper(".myforthslider", {
  slidesPerView: 9,
  spaceBetween: 0,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var fifthslider = new Swiper(".myfifthslider", {
  slidesPerView: 3,
  grid: {
    rows: 4,
  },
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});
/******* */
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "     مشاهده بیشتر >";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "       بستن     > ";
    moreText.style.display = "inline";
  }
}
