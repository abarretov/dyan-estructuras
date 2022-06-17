// prevents the viewport bug
function setHeight() {
  // get the viewport height/width and multiple it by 1% to get a value for a vh/vw unit
  let vh = window.innerHeight * 0.01
  let vw = window.innerWidth * 0.01
  // set the value in the --vh/--vw custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  document.documentElement.style.setProperty('--vw', `${vw}px`)
}

// update the value of --vh/--vw by listening to the window resize event
// window.addEventListener('resize', () => {
//   setHeight()
// })