var swiper = new Swiper(".mySwiper0", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  loop: false,
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev ",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".mySwiper3", {
  autoplay: true,
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 1,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 1,
    },
  },
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 2,
  spaceBetween: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
  },
});
