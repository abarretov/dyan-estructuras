async function preloader() {
	let preloader = document.querySelector('.preloader')
	let content = document.querySelector('.preloader__content')
	let svg = document.getElementById('logoBlue')
	content.classList.add('loaded') // show white background
	svg.classList.add('loaded') // show the blue logo
	await WAIT(1000)
	svg.classList.add('hide') // vanish the blue logo
	await WAIT(600)
	preloader.classList.add('hide') // hide the preloader
	BODY.classList.remove('freeze') // remove the freeze class of the body
}
