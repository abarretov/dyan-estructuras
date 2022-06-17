// extend a Siema class by two methods
class SiemaWithDots extends Siema {
  // to create a markup for dots
  addDots() {
    // create a contanier for all dots
    // add a class 'dots' for styling reason
    this.dots = document.createElement('div')
    this.dots.classList.add('dots')
    // loop through slides to create a number of dots
    for(let i = 0; i < this.innerElements.length; i++) {
      // create a dot
      const dot = document.createElement('button')
      // add a class to dot
      dot.classList.add('dots__item')
      // add an event handler to each of them
      dot.addEventListener('click', () => {
        this.goTo(i)
      })
      // append dot to a container for all of them
      this.dots.appendChild(dot)
    }
    // add the container full of dots after selector
    this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling)
  }

  // to update classes on dots on change callback
  updateDots() {
    // loop through all dots
    for(let i = 0; i < this.dots.querySelectorAll('button').length; i++) {
      // if current dot matches currentSlide prop, add a class to it, remove otherwise
      const addOrRemove = this.currentSlide === i ? 'add' : 'remove'
      this.dots.querySelectorAll('button')[i].classList[addOrRemove]('dots__item--active')
    }
  }
}

var initSiemaWithDots = () => {
  const SIEMA_PROJECT = new SiemaWithDots ({
    // configuration
    selector: '.siema-project',
    startIndex: 0,
    duration: 700,
    easing: 'ease-out',
    loop: true,
    perPage: 1,
    draggable: true,
    multipleDrag: true,
    onInit: function() {
      this.addDots()
      this.updateDots()
    },
    onChange: function() {
      this.updateDots()
    }
  })

  setInterval( () => {
    SIEMA_PROJECT.next()
  }, 6000)
}

// execute on load
window.addEventListener('load', () => {
  preloader()
  setHeight()
  initSiemaWithDots()
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