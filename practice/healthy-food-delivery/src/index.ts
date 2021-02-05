document.addEventListener('DOMContentLoaded', () => {
  const tabs: NodeListOf<Element> = document.querySelectorAll('.tabheader__item')
  const tabsContent: NodeListOf<Element> = document.querySelectorAll('.tabcontent')
  const forms: NodeListOf<Element> = document.querySelectorAll('form')
  const tabsParent: HTMLElement = document.querySelector('.tabheader__items')

  const responseMessage = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    error: 'Что-то пошло не так',
  }

  function makeTabContentHidden() {
    tabsContent.forEach((item: HTMLElement) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach((item: HTMLElement) => {
      item.classList.remove('tabheader__item_active')
    })
  }

  function makeTabContentVisible(i: number = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabheader__item_active')
  }

  makeTabContentHidden()
  makeTabContentVisible()

  tabsParent.addEventListener('click', (e: Event) => {
    if (e.target && (e.target as HTMLElement).classList.contains('tabheader__item')) {
      tabs.forEach((item: HTMLElement, index: number) => {
        if (e.target === item) {
          makeTabContentHidden()
          makeTabContentVisible(index)
        }
      })
    }
  })

  const countdownData: string = '2021-07-13'

  function getTimeRemaining(endtime: string) {
    const totalMilliseconds: number = Date.parse(endtime) - Date.parse(new Date().toString())
    const days: number = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24))
    const hours: number = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24)
    const minutes: number = Math.floor((totalMilliseconds / 1000 / 60) % 60)
    const seconds: number = Math.floor((totalMilliseconds / 1000) % 60)

    return {
      total: totalMilliseconds,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  function insertZeroIntoTimer(num: number): string {
    return num >= 0 && num < 10 ? `0${num}` : ((num as unknown) as string)
  }

  function setTimer(selector: string, endtime: string) {
    const timer: HTMLElement = document.querySelector(selector)
    const days: HTMLElement = timer.querySelector('#days')
    const hours: HTMLElement = timer.querySelector('#hours')
    const minutes: HTMLElement = timer.querySelector('#minutes')
    const seconds: HTMLElement = timer.querySelector('#seconds')

    const timerInterval = setInterval(updateTimer, 1000)

    updateTimer()

    function updateTimer() {
      const timeNow = getTimeRemaining(endtime)

      days.innerHTML = insertZeroIntoTimer(timeNow.days)
      hours.innerHTML = insertZeroIntoTimer(timeNow.hours)
      minutes.innerHTML = insertZeroIntoTimer(timeNow.minutes)
      seconds.innerHTML = insertZeroIntoTimer(timeNow.seconds)

      if (timeNow.total <= 0) {
        clearInterval(timerInterval)
      }
    }
  }

  setTimer('.timer', countdownData)

  const modalWindowTrigger: NodeListOf<Element> = document.querySelectorAll('[data-modal]')
  const modalWindow: HTMLElement = document.querySelector('.modal')
  const modalCloseButton: HTMLElement = document.querySelector('[data-close]')

  function openModalWindow() {
    modalWindow.classList.add('show')
    modalWindow.classList.remove('hide')
    document.body.style.overflow = 'hidden'

    clearInterval(modalWindowTimer)
  }

  function closeModalWindow() {
    modalWindow.classList.remove('show')
    modalWindow.classList.add('hide')
    document.body.style.overflow = ''
  }

  modalWindowTrigger.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', () => openModalWindow)
  })

  modalCloseButton.addEventListener('click', () => closeModalWindow())

  modalWindow.addEventListener('click', (e: Event) =>
    e.target === modalWindow ? closeModalWindow() : null
  )

  document.addEventListener('keydown', (e: KeyboardEvent) =>
    e.code === 'Escape' && modalWindow.classList.contains('show') ? closeModalWindow() : null
  )

  const modalWindowTimer: ReturnType<typeof setTimeout> = setTimeout(openModalWindow, 3000)

  function showModalWindowAfterScrolling() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModalWindow()
      window.removeEventListener('scroll', showModalWindowAfterScrolling)
    }
  }

  window.addEventListener('scroll', showModalWindowAfterScrolling)

  class MenuCard {
    imgSrc: string

    alt: string

    title: string

    description: string

    price: number

    parentSelector: HTMLElement

    classes: string[]

    currency: number

    element: string

    constructor(
      imgSrc: string,
      alt: string,
      title: string,
      description: string,
      price: number,
      parentSelector: string,
      ...classes: string[]
    ) {
      this.imgSrc = imgSrc
      this.alt = alt
      this.title = title
      this.description = description
      this.price = price
      this.parentSelector = document.querySelector(parentSelector)
      this.classes = classes
      this.currency = 75
      this.convertCurrency()
      this.element = 'menu__item'
    }

    convertCurrency() {
      this.price *= this.currency
    }

    render() {
      const element: HTMLElement = document.createElement('div')

      if (this.classes.length === 0) {
        element.classList.add(this.element)
      } else {
        this.classes.forEach((className) => element.classList.add(className))
      }

      element.innerHTML = `
          <img src=${this.imgSrc} alt=${this.alt}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.description}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
          </div>
      `
      this.parentSelector.append(element)
    }
  }

  new MenuCard(
    '../src/assets/img/tabs/vegy.jpg',
    'fitness',
    `Меню "Фитнес"`,
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и
  фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким
  качеством!`,
    10,
    '.menu .container',
    'menu__item'
  ).render()

  new MenuCard(
    '../src/assets/img/tabs/elite.jpg',
    'premium',
    `Меню “Премиум”`,
    `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и
    качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
    18,
    '.menu .container',
    'menu__item'
  ).render()

  new MenuCard(
    '../src/assets/img/tabs/post.jpg',
    'post',
    `Меню "Постное"`,
    `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов
    животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет
    тофу и импортных вегетарианских стейков.`,
    22,
    '.menu .container',
    'menu__item'
  ).render()

  function sendFormData(form: HTMLFormElement) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const statusMessage: HTMLDivElement = document.createElement('div')
      statusMessage.classList.add('status')
      statusMessage.textContent = responseMessage.loading
      form.append(statusMessage)

      const request: XMLHttpRequest = new XMLHttpRequest()

      request.open('POST', 'https://jsonplaceholder.typicode.com/users')
      request.setRequestHeader('Content-Type', 'application/json')

      const formData: FormData = new FormData(form)
      const dataFromInputs: Object = {}
      formData.forEach((value, key) => {
        dataFromInputs[key] = value
      })

      const formDataToJSON: string | FormData = JSON.stringify(dataFromInputs)

      request.send(formDataToJSON)
      request.addEventListener('load', () => {
        if (request.status === 201) {
          statusMessage.textContent = responseMessage.success
        } else {
          statusMessage.textContent = responseMessage.error
        }
      })
    })
  }

  forms.forEach((item: HTMLFormElement) => sendFormData(item))
})
