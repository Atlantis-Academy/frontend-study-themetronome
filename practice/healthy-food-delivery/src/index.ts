document.addEventListener('DOMContentLoaded', () => {
  const tabs: NodeListOf<Element> = document.querySelectorAll('.tabheader__item')
  const tabsContent: NodeListOf<Element> = document.querySelectorAll('.tabcontent')
  const tabsParent: HTMLElement = document.querySelector('.tabheader__items')

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

  modalWindowTrigger.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener('click', () => {
      modalWindow.classList.add('show')
      modalWindow.classList.remove('hide')
      document.body.style.overflow = 'hidden'
    })
  })

  function closeModalWindow() {
    modalWindow.classList.remove('show')
    modalWindow.classList.add('hide')
    document.body.style.overflow = ''
  }

  modalCloseButton.addEventListener('click', () => closeModalWindow())

  modalWindow.addEventListener('click', (e: Event) =>
    e.target === modalWindow ? closeModalWindow() : null
  )

  document.addEventListener('keydown', (e: KeyboardEvent) =>
    e.code === 'Escape' && modalWindow.classList.contains('show') ? closeModalWindow() : null
  )
})
