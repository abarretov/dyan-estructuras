const PROJECTS = document.querySelector('.projects')
const PROJECT_SLIDERS = initProjectSliders()

// remove elements according to screen resolution
function removeProjects() {
  const PROJECT_CONTAINERS = PROJECTS.querySelectorAll(':scope .projects__container')
  if (VIEWPORT_WIDTH < 768) {
    PROJECT_CONTAINERS.forEach(container => {
      container.classList.contains('mobileOnly') || container.remove()
    })
  } else if (VIEWPORT_WIDTH >= 768 && VIEWPORT_WIDTH < 1280) {
    PROJECT_CONTAINERS.forEach(container => {
      container.classList.contains('tabletOnly') || container.remove()
    })
  } else {
    PROJECT_CONTAINERS.forEach(container => {
      container.classList.contains('desktopOnly') || container.remove()
    })
  }
}

// create the Siema's sliders
function initProjectSliders() {
  removeProjects() // remove elements according to screen resolution
  const SLIDERS = PROJECTS.querySelectorAll(':scope .projects__siema')
  const NEXT_BUTTONS = PROJECTS.querySelectorAll(':scope .projects__next')
  const PREV_BUTTONS = PROJECTS.querySelectorAll(':scope .projects__prev')
  const TOTAL_BUTTONS = NEXT_BUTTONS.length // PREV_BUTTONS.length
  let slidersArray = [] // initializes the array that will contain the sliders
  for (const SIEMA of SLIDERS) {
    slidersArray.push (
      new Siema ({
        // configuration
        selector: SIEMA,
        duration: 700,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        loop: true
      })
    )
  }

  // create the event listener of next button
  for (let i = 0; i < TOTAL_BUTTONS; i++) {
    NEXT_BUTTONS[i].addEventListener('click', () => slidersArray[i].next())
  }

  // create the event listener of previous button
  for (let i = 0; i < TOTAL_BUTTONS; i++) {
    PREV_BUTTONS[i].addEventListener('click', () => slidersArray[i].prev())
  }

  // return the sliders array to be able to use it
  return slidersArray
}

// hide Siema's sliders
function hideProject(slidersArray) {
  let slider = PROJECTS.querySelector(':scope .projects__siema.active')
  let button = PROJECTS.querySelector(':scope .projects__buttons.active')
  let selector = PROJECTS.querySelector(':scope .projects__selectors button.active')
  let typeProject = slider.dataset.slider
  let sliderNumber = checkSliderNumber(typeProject)
  slidersArray[sliderNumber].destroy()
  slider.classList.remove('active')
  button.classList.remove('active')
  selector.classList.remove('active')
}

// check the type of project
function checkSliderNumber(typeProject) {
  if (typeProject === 'residentials') {
    sliderNum = 0
  } else if (typeProject === 'commercials') {
    sliderNum = 1
  } else {
    sliderNum = 2
  }
  return sliderNum
}

// show Siema's sliders
function showProject(slidersArray, typeProject) {
  // search the slider
  let slider = PROJECTS.querySelector(`:scope .projects__siema[data-slider="${CSS.escape(typeProject)}"]`)
  let buttons = PROJECTS.querySelector(`:scope .projects__buttons[data-slider="${CSS.escape(typeProject)}"]`)
  let selectors = PROJECTS.querySelector(`:scope .projects__selectors button#${CSS.escape(typeProject)}`)
  // adds the "active" class to show the slider
  slider.classList.add('active')
  buttons.classList.add('active')
  selectors.classList.add('active')
  // checks the number by the type of the project
  let sliderNumber = checkSliderNumber(typeProject)
  // init the slider
  slidersArray[sliderNumber].init()
}

// hide some Siema's sliders at the beginning
function hideSomeProjects(slidersArray) {
  let sliders = PROJECTS.querySelectorAll(':scope .projects__siema')
  let selectors = PROJECTS.querySelectorAll(':scope .projects__selectors button')
  let buttons = PROJECTS.querySelectorAll(':scope .projects__buttons')
  let numSliders = sliders.length - 1
  let arrayNumbers = []
  let i = 0
  let numRandom
  do {
    numRandom = getRandomNumberZero(3)
    if (arrayNumbers.length > 0) {
      arrayNumbers.forEach(number => {
        if (numRandom !== number) {
          // destroy the slider
          slidersArray[numRandom].destroy()
          // remove the class from the elements to hide them
          sliders[numRandom].classList.remove('active')
          buttons[numRandom].classList.remove('active')
          selectors[numRandom].classList.remove('active')
          i = i + 1
        } else {
          return
        }
      })
    } else {
      slidersArray[numRandom].destroy()
      sliders[numRandom].classList.remove('active')
      buttons[numRandom].classList.remove('active')
      selectors[numRandom].classList.remove('active')
      arrayNumbers.push(numRandom)
      i = i + 1
    }
  } while (i !== numSliders)
  // prevents infinite loops
  i = 0
  arrayNumbers.splice(0, arrayNumbers.length)
}

addGlobalEventListener('click', '[data-trigger="slider"]', (e) => {
  let typeProject = e.target.id
  hideProject(PROJECT_SLIDERS)
  showProject(PROJECT_SLIDERS, typeProject)
})

// window.addEventListener('load', () => {
//   initProjectSliders()
//   hideSomeProjects()
// })

// window.addEventListener('resize', () => {
//   // false to get page from cache
//   // true to fetch page from server
//   this.location.reload(true)
// })
