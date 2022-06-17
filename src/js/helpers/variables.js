const WAIT = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))
const BODY = document.body
const HTML = document.documentElement
const VIEWPORT_HEIGHT = window.innerHeight
const VIEWPORT_WIDTH = window.innerWidth
const BOTTOM = document.querySelector('.footer__credits')
const BOTTOM_LIMIT = Math.max(
  BOTTOM.scrollHeight,
  BOTTOM.offsetHeight,
  BOTTOM.clientHeight
  )
let scrollFlag = true