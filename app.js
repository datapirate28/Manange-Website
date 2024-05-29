const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const closeToggle = document.querySelector('.icon-close');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
    closeToggle.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})

