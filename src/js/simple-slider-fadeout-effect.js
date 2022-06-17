/* Simple slider with fadeout effect
 * -------------------------------------------------------------------------- */
var index = {current: 0} // initialize and declare the index object
var slides = document.getElementsByClassName('slide') // create the array of slides

function initFadeOutSliders() {
  // hide the last slide visible
  if (index.last || index.last === 0) {
    slides[index.last].classList.remove('slide--visible')
  }
  // show the next slide
  slides[index.current].classList.add('slide--visible')
  index.last = index.current // redefine last index
  index.current++ // redefine current index
  // reset the current index after showed all the slides
  if (index.current >= slides.length) {
      index.current = 0
  }
  // repeat the function
  setTimeout(initFadeOutSliders, 6000)
}