const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const closeToggle = document.querySelector('.icon-close');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
    closeToggle.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: '1',
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        440: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        850: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1220: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        1420: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
      }
  });

