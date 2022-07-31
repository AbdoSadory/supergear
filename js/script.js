$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
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
