document.addEventListener('keyup', (e) => {
  if (e.target.matches('.form [required]')) {
    let input = e.target
    let pattern = input.pattern || input.dataset.pattern
    if (pattern && input.value !== '') {
      let regExp = new RegExp(pattern)
      return !regExp.test(input.value)
        ? input.classList.add('test-active')
        : input.classList.remove('test-active')
    }
    if (!pattern) {
      return input.value === ''
        ? input.classList.add('test-active')
        : input.classList.remove('test-active')
    }
  }
})