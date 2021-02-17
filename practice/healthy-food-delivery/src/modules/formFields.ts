import { openModalWindow, closeModalWindow } from './userDataModal'
import { sendFormData } from '../services/postData'

function formFields(formSelector: string, timer: number) {
  const forms: NodeListOf<Element> = document.querySelectorAll(formSelector)

  const responseMessage = {
    loading: '../src/assets/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    error: 'Что-то пошло не так',
  }

  function handleFormData(form: HTMLFormElement) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const statusMessage: HTMLImageElement = document.createElement('img')
      statusMessage.setAttribute('src', responseMessage.loading)
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `
      form.append(statusMessage)

      const formData: FormData = new FormData(form)
      const toJSON = JSON.stringify(Object.fromEntries(formData.entries()))

      sendFormData('https://6027afc0dd4afd001754a9b0.mockapi.io/api/users', toJSON)
        .then(() => {
          showThanksModal(responseMessage.success)
          statusMessage.remove()
        })
        .catch(() => {
          showThanksModal(responseMessage.error)
        })
        .finally(() => {
          form.reset()
        })
    })
  }

  forms.forEach((item: HTMLFormElement) => handleFormData(item))

  function showThanksModal(statusMessage: string) {
    const formsModal: HTMLElement = document.querySelector('.modal__dialog')
    formsModal.classList.add('hide')

    openModalWindow('.modal', timer)

    const thanksModal: HTMLDivElement = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${statusMessage}</div>
      </div>
    `

    document.querySelector('.modal').append(thanksModal)
    setTimeout(() => {
      thanksModal.remove()
      formsModal.classList.add('show')
      formsModal.classList.remove('hide')

      closeModalWindow('.modal')
    }, 5000)
  }
}

export default formFields
