import caloriesCalculator   from './modules/caloriesCalculator'
import countdownTimer       from './modules/countdownTimer'
import formFields           from './modules/formFields'
import menuTabs             from './modules/menuTabs'
import offerMenuCards       from './modules/offerMenuCards'
import productsSlider       from './modules/productsSlider'
import userDataModal        from './modules/userDataModal'
import { modalWindowTimer } from './utils/modalWindowTimer'

document.addEventListener('DOMContentLoaded', () => {
  menuTabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
  countdownTimer('.timer', '2021-08-27')
  userDataModal('[data-modal]', '.modal', modalWindowTimer)
  offerMenuCards()
  formFields('form', modalWindowTimer)
  productsSlider({
    container: '.offer__slider',
    totalOfferSlider: '.offer__slide',
    previousSlideArrow: '.offer__slider-prev',
    nextSlideArrow: '.offer__slider-next',
    totalSlideCounter: '#total',
    displaySlideCounter: '#current',
  })
  caloriesCalculator()
})
