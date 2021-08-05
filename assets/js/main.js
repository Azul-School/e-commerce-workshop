var swiper = new Swiper(".swiper-promos", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperBrowseCategory = new Swiper(".swiper-browser-category", {
  slidesPerView: 8,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperBrowseCategory = new Swiper(".featured-brand-swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

