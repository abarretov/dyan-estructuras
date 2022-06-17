// Execute on load
window.addEventListener('load', () => {
  preloader()
  setHeight()
  showTeamMemberInfo()
  let heightPage = Math.max(
    BODY.scrollHeight,
    BODY.offsetHeight,
    HTML.clientHeight,
    HTML.scrollHeight,
    HTML.offsetHeight
  )
  sessionStorage.setItem('heightPage', heightPage) 
  initWhatsAppBtn()
  // smoothScroll()
})