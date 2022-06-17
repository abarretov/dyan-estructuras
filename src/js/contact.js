const FORM_LOGIN = document.querySelector('.form')

// Execute on load
window.addEventListener('load', () => {
  preloader()
  setHeight()
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

FORM_LOGIN.addEventListener('submit', (e) => {
  e.preventDefault()
  sendEmail(e.currentTarget)
})