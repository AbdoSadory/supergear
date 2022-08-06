$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 1500,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    425: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 6,
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
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
