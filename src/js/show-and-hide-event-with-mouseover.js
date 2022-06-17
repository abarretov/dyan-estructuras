/* Show or hide elements
 * -------------------------------------------------------------------------- */
const IMAGES = document.querySelectorAll(':scope .services img')
const TITLES = document.querySelectorAll(':scope .services__title h2')
const TEXTS = document.querySelectorAll(':scope .services__description div')
const BUTTONS = document.querySelectorAll(':scope .services__buttons button')

// create the event listener of each button
var showAndHide = () => {
  for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener('mouseover', () => {
      showItems(BUTTONS[i], IMAGES[i], TITLES[i], TEXTS[i])
    })
  }  
}

// show the element is pointed
function showItems(button, image, title, text) {
  hideItems()
  button.classList.add('show')
  image.classList.add('show')
  title.classList.add('show')
  text.classList.add('show')
}

// find and hide the elements visible currently
function hideItems () {
  IMAGES.forEach( element => element.classList.contains('show')? element.classList.remove('show') : false)
  TITLES.forEach( element => element.classList.contains('show')? element.classList.remove('show') : false)
  TEXTS.forEach( element => element.classList.contains('show')? element.classList.remove('show') : false)
  BUTTONS.forEach( element => element.classList.contains('show')? element.classList.remove('show') : false)
}
