const MESSAGES = document.querySelectorAll('.whatsapp__content')
const TIMESTAMPS = document.querySelectorAll('.whatsapp__timestamp')
const WHATSAPP = document.getElementById('whatsappLink')
const WHATSAPP_ICON = document.getElementById('whatsappIcon')
const WHATSAPP_HEIGHT = WHATSAPP.scrollHeight
// const WAIT = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))

// get current time
function getTime() {
  let today = new Date()
  // let day = today.getDay() // returns the day of the week (from 0 to 6) of a date
  // let daylist = ['Sunday','Monday','Tuesday','Wednesday ','Thursday','Friday','Saturday']
  let hour = today.getHours()
  let minutes = today.getMinutes()
  // let seconds = today.getSeconds()
  let timeSystem = (hour >= 12)? 'PM': 'AM'
  hour = (hour >= 12)? hour - 12: hour
  time = `${hour}:${minutes} ${timeSystem}`
  return time
}

// set the time on the elements
function setTimestamp() {
  time = getTime()
  for (let i = 0; i < TIMESTAMPS.length; i++) {
    TIMESTAMPS[i].innerText = time
  }
}

// move up the chats
async function moveUpChats() {
  for (let i = 0; i < MESSAGES.length; i++) {
    if (i !== 0) {
      await WAIT(400)
    } else {
      await WAIT(0)
    }
    MESSAGES[i].animate(
      [
        { transform: `translateY(${WHATSAPP_HEIGHT}px)`, opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ], {
        duration: 400,
        easing: 'ease',
        fill: 'forwards'
      }
    )
  }
}

// move down the chats
async function moveDownChats() {
  const SIZE = MESSAGES.length - 1
  for (let i = SIZE; 0 <= i; i--) {
    if (i !== SIZE) {
      await WAIT(400)
    } else {
      await WAIT(0)
    }
    MESSAGES[i].animate(
      [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(${WHATSAPP_HEIGHT}px)`, opacity: 0 }
      ], {
        duration: 400,
        easing: 'ease',
        fill: 'forwards'
      }
    )
  }
}

// start event listener to show WhatsApp button
function initWhatsAppBtn() {
  window.addEventListener('scroll', () => {
    const HEIGHT_PAGE = Number(sessionStorage.getItem('heightPage'))
    let scrollIndicator = window.scrollY
    if (scrollIndicator >= VIEWPORT_HEIGHT && scrollFlag === true) {
      WHATSAPP.classList.add('whatsapp--show')
      showWhatsApp()
      scrollFlag = false
    } else {
      if (scrollFlag === false) {
        if (scrollIndicator + VIEWPORT_HEIGHT >= HEIGHT_PAGE - BOTTOM_LIMIT) {
          WHATSAPP.classList.remove('whatsapp--show')
        } else {
          WHATSAPP.classList.add('whatsapp--show')
        }
      } else return
    }
  })
}

// run animation
async function showWhatsApp() {
  await WAIT(6000)
  setTimestamp()
  WHATSAPP_ICON.classList.add('ring')
  await WAIT(1000)
  WHATSAPP.classList.add('whatsapp--move')
  await WAIT(1500)
  moveUpChats()
  await WAIT(6000)
  moveDownChats()
  await WAIT(1000)
  WHATSAPP.classList.remove('whatsapp--move')
  WHATSAPP_ICON.classList.remove('ring')
  setTimeout(() => {
    showWhatsApp()
  }, 60000)
}