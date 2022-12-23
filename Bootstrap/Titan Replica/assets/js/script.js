var swiper = new Swiper(".promo-swiper", {
  direction: "vertical",
  autoplay: { delay: 3000 },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  height: 30,
});

var sectionSwiper = new Swiper(".section-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
// Read More Function
function readMore() {
  const trigger = document.getElementById("trigger");
  const moreText = document.getElementById("read-more");
  const buttonText = document.getElementById("readmore-btn");

  if (trigger.style.display === "none") {
    trigger.style.display = "inline";
    moreText.style.display = "none";
  } else {
    trigger.style.display = "none";
    buttonText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}
