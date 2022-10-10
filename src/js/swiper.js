new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.next__btn',
    prevEl: '.prev__btn ',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 35,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});


new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next__btn-works',
    prevEl: '.prev__btn-works',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

new Swiper('.swiper3', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.btn__next-reviews',
    prevEl: '.btn__prev-reviews',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    650: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

new Swiper('.swiper4', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.examples-allum-swiper-next',
    prevEl: '.examples-allum-swiper-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

new Swiper('.swiper5', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.examples-plastick-swiper-next',
    prevEl: '.examples-plastick-swiper-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  }
});

new Swiper('.swiper6', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 1.6,
      spaceBetween: 35,
    },
    650: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});