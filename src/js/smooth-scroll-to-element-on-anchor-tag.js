// smooth Scroll to Element on anchor tag
function smoothScroll() {
  document.querySelectorAll('a.scroll-trigger[href*="#"]:not([href="#"])').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault() // cancels the default action that belongs to the event (if it is cancelable)
      let target = e.currentTarget.getAttribute('href')
      target = target.replace('./', '')
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest' // sets the vertical alignment
      })
      // close the menu when the trigger is clicked on mobile
      if (window.innerWidth <= 1280 && document.querySelector('body').classList.contains('freeze')) {
        setTimeout(mobileMenu(), 2000)
      }
    })
  })
}