const URL = './inc/sendEmail.php'
const RESPONSE_CONTENT = document.querySelector('.form__message')
const RESPONSE_MESSAGE = document.querySelector('.form__message p')
const LOADING = document.querySelector('.form__loading')

// get all data from user
async function sendEmail(form) {
  LOADING.classList.add('form__loading--active')
  try {
    const DATA = JSON.stringify({
      name: form.contactName.value,
      company: form.contactCompany.value,
      phone: form.contactPhone.value,
      email: form.contactEmail.value,
      subject: form.contactSubject.value,
      note: form.contactNote.value
    })
    const REQUEST = await fetch(`${URL}`, {
      method: 'POST',
      body: DATA
    })
    const RESULT = await REQUEST.json()
    const RESPONSE = RESULT
    if (RESPONSE.status === 'success') {
      // show success message
      LOADING.classList.remove('form__loading--active')
      RESPONSE_MESSAGE.innerText = RESPONSE.message
      RESPONSE_CONTENT.classList.add('show', 'form__message--success')
      form.reset()
    } else {
      // show error message
      LOADING.classList.remove('form__loading--active')
      RESPONSE_MESSAGE.innerText = RESPONSE.message
      RESPONSE_CONTENT.classList.add('show', 'form__message--failed')
    }
  } catch(err) {
    console.error(`Hubo un problema con la petición Fetch: Error ${err}`)
  }
}

// document.addEventListener('submit', (e) => {
//   e.preventDefault()
//   sendEmail(e.currentTarget)
// })