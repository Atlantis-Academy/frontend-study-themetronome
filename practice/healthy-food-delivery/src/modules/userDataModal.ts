export function openModalWindow(modalSelector: string, modalWindowTimer: number) {
  const modalWindow: HTMLElement = document.querySelector(modalSelector)

  modalWindow.classList.add('show')
  modalWindow.classList.remove('hide')
  document.body.style.overflow = 'hidden'

  if (modalWindowTimer) {
    clearInterval(modalWindowTimer)
  }
}

export function closeModalWindow(modalSelector: string) {
  const modalWindow: HTMLElement = document.querySelector(modalSelector)

  modalWindow.classList.remove('show')
  modalWindow.classList.add('hide')
  document.body.style.overflow = ''
}

function userDataModal(triggerSelector: string, modalSelector: string, modalWindowTimer: number) {
  const modalWindowTrigger: NodeListOf<Element> = document.querySelectorAll(triggerSelector)
  const modalWindow: HTMLElement = document.querySelector(modalSelector)

  modalWindowTrigger.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', () => openModalWindow(modalSelector, modalWindowTimer))
  })

  modalWindow.addEventListener('click', (e: Event) =>
    e.target === modalWindow || (e.target as HTMLElement).getAttribute('data-close')
      ? closeModalWindow(modalSelector)
      : null,
  )

  document.addEventListener('keydown', (e: KeyboardEvent) =>
    e.code === 'Escape' && modalWindow.classList.contains('show')
      ? closeModalWindow(modalSelector)
      : null,
  )

  function showModalWindowAfterScrolling() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModalWindow(modalSelector, modalWindowTimer)
      window.removeEventListener('scroll', showModalWindowAfterScrolling)
    }
  }

  window.addEventListener('scroll', showModalWindowAfterScrolling)
}

export default userDataModal
