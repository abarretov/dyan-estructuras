// initializes Siema's carousel for client section
var initCarousel = () => {
  if (window.innerWidth >= 768) {
    const SIEMA_CLIENTS = new Siema ({
      // configuration
      selector: '.siema-clients',
      startIndex: 0,
      duration: 2000,
      easing: 'ease',
      loop: true,
      perPage: {
        320: 2, // 2 items for viewport wider than 320px
        768: 4, // 4 items for viewport wider than 768px
        1280: 6, // 6 items for viewport wider than 1240px
      }
    })
    setInterval( () => {
      SIEMA_CLIENTS.next()
    }, 4000)
  }
}
