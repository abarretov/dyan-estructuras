const HEADER = document.querySelector('.header')
const HEADER_BOTTOM = document.querySelector('.header__bottom')
const HEADER_WRAPPER = document.querySelector('.header .wrapper:nth-child(2)')
const HAMBURGER_BTN = document.querySelector('.hamburger')
const NAVBAR = document.querySelector('.navbar__nav')
const BRAND = document.querySelector('.brand')

// show and hide the menu (mobile only)
var mobileMenu = () => {
  HAMBURGER_BTN.classList.toggle('hamburger--active')
  // HEADER.classList.toggle('header--hide')
  BRAND.classList.toggle('brand--change')
  NAVBAR.classList.toggle('navbar__nav--expanded')
  BODY.classList.toggle('freeze')
}

// create the event listener of hamburger button
HAMBURGER_BTN.addEventListener('click', () => {
  mobileMenu()
})

// shrink the header (desktop only)
var desktopMenu = () => {
  if (window.innerWidth >= 1280) {
    if (window.scrollY >= 30) {
      BRAND.classList.add('brand--shrink')
      HEADER_BOTTOM.classList.add('header__bottom--shrink')
      if (HEADER.classList.contains('header--abs')) {
        HEADER_WRAPPER.style.background = '#FCFCFC'
        HEADER_WRAPPER.style.boxShadow = '0 1px 6px #000000'
      }
    } else {
      BRAND.classList.remove('brand--shrink')
      HEADER_BOTTOM.classList.remove('header__bottom--shrink')
      if (HEADER.classList.contains('header--abs')) {
        HEADER_WRAPPER.style.background = 'transparent'
        HEADER_WRAPPER.style.boxShadow = 'none'
      }
    }
  }
}

// create the event listener of the window
window.addEventListener("scroll", () => {
  desktopMenu()
})