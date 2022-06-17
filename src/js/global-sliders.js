// initializes Siema's sliders
var initGlobalSliders = () => {
  const SIEMAS = document.querySelectorAll('.siema')
  const NEXTS = document.querySelectorAll('.next')
  const PREVS = document.querySelectorAll('.prev')
  var arraySliders = [] // initializes the array that will contain the sliders
  for (const SIEMA of SIEMAS) {
    arraySliders.push (
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

  // sends the arguments to the function to create the event listener of each next button
  for (let i = 0; i < NEXTS.length; i++) {
    goToNext(NEXTS[i], arraySliders[i])
  }

  // create the event listener of next button
  function goToNext(button, target) {
    button.addEventListener('click', () => target.next())
  }

  // sends the arguments to the function to create the event listener of each previous button
  for (let i = 0; i < PREVS.length; i++) {
    goToPrev(PREVS[i], arraySliders[i])
  }

  // create the event listener of previous button
  function goToPrev(button, target) {
    button.addEventListener('click', () => target.prev())
  }
}