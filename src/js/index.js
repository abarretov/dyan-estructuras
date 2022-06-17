// execute on load
window.addEventListener('load', () => {
  setHeight()
  preloader()
  smoothScroll()
  showAndHide()
  initFadeOutSliders()
  initGlobalSliders()
  initCarousel()
  hideSomeProjects(PROJECT_SLIDERS)
  let heightPage = Math.max(
    BODY.scrollHeight,
    BODY.offsetHeight,
    HTML.clientHeight,
    HTML.scrollHeight,
    HTML.offsetHeight
  )
  sessionStorage.setItem('heightPage', heightPage) 
  initWhatsAppBtn()
})

// window.addEventListener('resize', () => {
//   // false to get page from cache
//   // true to fetch page from server
//   this.location.reload(true)
// })
