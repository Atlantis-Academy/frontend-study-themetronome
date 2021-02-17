interface Slider {
  container: string
  totalOfferSlider: string
  previousSlideArrow: string
  nextSlideArrow: string
  totalSlideCounter: string
  displaySlideCounter: string
}

function productsSlider({
  container,
  totalOfferSlider,
  previousSlideArrow,
  nextSlideArrow,
  totalSlideCounter,
  displaySlideCounter,
}: Slider) {
  const slider: HTMLElement = document.querySelector(container)
  slider.style.position = 'relative'

  const offerSlides: NodeListOf<HTMLElement> = document.querySelectorAll(totalOfferSlider)
  const previousSlide: HTMLElement = document.querySelector(previousSlideArrow)
  const nextSlide: HTMLElement = document.querySelector(nextSlideArrow)
  const totalSlides: HTMLElement = document.querySelector(totalSlideCounter)
  const currentSlide: HTMLElement = document.querySelector(displaySlideCounter)

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
    const dotItem: HTMLLIElement = document.createElement('li')
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
}

export default productsSlider
