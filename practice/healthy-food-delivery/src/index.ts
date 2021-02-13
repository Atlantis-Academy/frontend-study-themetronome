document.addEventListener('DOMContentLoaded', () => {
  const tabs: NodeListOf<Element> = document.querySelectorAll('.tabheader__item')
  const tabsContent: NodeListOf<Element> = document.querySelectorAll('.tabcontent')
  const forms: NodeListOf<Element> = document.querySelectorAll('form')
  const tabsParent: HTMLElement = document.querySelector('.tabheader__items')

  const responseMessage = {
    loading: '../src/assets/form/spinner.svg',
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
    btn.addEventListener('click', () => openModalWindow())
  })

  modalWindow.addEventListener('click', (e: Event) =>
    e.target === modalWindow || (e.target as HTMLElement).getAttribute('data-close')
      ? closeModalWindow()
      : null
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

  async function getDataFromDb(url: string) {
    const result: Response = await fetch(url)

    if (!result.ok) {
      throw new Error(`Couldn't fetch ${url}, status: ${result.status}`)
    }

    return result.json()
  }

  getDataFromDb('https://6027afc0dd4afd001754a9b0.mockapi.io/api/menu').then((data) => {
    data.forEach(({ imgSrc, alt, title, description, price }) => {
      new MenuCard(imgSrc, alt, title, description, price, '.menu .container').render()
    })
  })

  async function sendFormData(url: string, data: string) {
    const result: Response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })

    return result.json()
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

    openModalWindow()

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

      closeModalWindow()
    }, 5000)
  }

  const slider: HTMLElement = document.querySelector('.offer__slider')
  slider.style.position = 'relative'

  const offerSlides: NodeListOf<HTMLElement> = document.querySelectorAll('.offer__slide')
  const previousSlide: HTMLElement = document.querySelector('.offer__slider-prev')
  const nextSlide: HTMLElement = document.querySelector('.offer__slider-next')
  const totalSlides: HTMLElement = document.querySelector('#total')
  const currentSlide = document.querySelector('#current')
  let currentSlideIndex: number = 1

  showSlide(currentSlideIndex)
  currentSlideCounter()

  function currentSlideCounter() {
    if (offerSlides.length < 10) {
      totalSlides.textContent = `0${offerSlides.length}`
    } else {
      totalSlides.textContent = offerSlides.length.toString()
    }
  }

  function showSlide(index) {
    if (index > offerSlides.length) {
      currentSlideIndex = 1
    }

    if (index < 1) {
      currentSlideIndex = offerSlides.length
    }

    offerSlides.forEach((item) => (item.style.display = 'none'))
    offerSlides[currentSlideIndex - 1].style.display = 'block'

    if (offerSlides.length < 10) {
      currentSlide.textContent = `0${currentSlideIndex}`
    } else {
      currentSlide.textContent = currentSlideIndex.toString()
    }
  }

  function incrementSlide(item: number) {
    showSlide((currentSlideIndex += item))
  }

  const indicators: HTMLOListElement = document.createElement('ol')
  const paginationDots = []

  indicators.classList.add('pagination-dots')
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `

  slider.append(indicators)
  for (let i = 0; i < offerSlides.length; i += 1) {
    const dotItem = document.createElement('li')
    dotItem.setAttribute('handle-slide', (i + 1).toString())
    dotItem.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `

    if (i === 0) {
      dotItem.style.opacity = '1'
    }

    indicators.append(dotItem)
    paginationDots.push(dotItem)
  }

  function changeColorBullet() {
    paginationDots.forEach((dot) => (dot.style.opacity = '.5'))
    paginationDots[currentSlideIndex - 1].style.opacity = 1
  }

  previousSlide.addEventListener('click', () => {
    incrementSlide(-1)

    changeColorBullet()
  })

  nextSlide.addEventListener('click', () => {
    incrementSlide(1)

    changeColorBullet()
  })
})
