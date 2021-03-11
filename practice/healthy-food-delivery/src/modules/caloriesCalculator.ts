function caloriesCalculator() {
  const calcResultValue: HTMLSpanElement = document.querySelector('.calculating__result span')
  let sex: string = 'female'
  let heightField
  let weightField
  let ageField
  let ratio: number = 1.375

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex')
  } else {
    sex = 'female'
    localStorage.setItem('sex', 'female')
  }

  if (localStorage.getItem('ratio')) {
    ratio = Number(localStorage.getItem('ratio'))
  } else {
    ratio = 1.375
    localStorage.setItem('ratio', (1.375).toString())
  }

  function initLocalSettings(selector: string, activeClass: string) {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector)

    elements.forEach(element => {
      element.classList.remove(activeClass)
      if (element.getAttribute('id') === localStorage.getItem('sex')) {
        element.classList.add(activeClass)
      }

      if (element.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        element.classList.add(activeClass)
      }
    })
  }

  initLocalSettings('#gender', 'calculating__choose-item_active')
  initLocalSettings('.calculating__choose_big', 'calculating__choose-item_active')

  // eslint-disable-next-line consistent-return
  function calculateTotal() {
    if (!sex || !heightField || !weightField || !ageField || !ratio) {
      calcResultValue.textContent = '___'
      return
    }

    if (sex === 'female') {
      calcResultValue.textContent = Math.round(
        (447.6 + 9.2 * weightField + 3.1 * heightField - 4.3 * ageField) * ratio,
      ).toString()
    } else {
      calcResultValue.textContent = Math.round(
        (88.36 + 13.4 * weightField + 4.8 * heightField - 5.7 * ageField) * ratio,
      ).toString()
    }
  }

  calculateTotal()

  function getStaticInfo(selector: string, activeClass: string) {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector)

    elements.forEach((element: HTMLElement) => {
      element.addEventListener('click', (e: Event) => {
        if ((e.target as HTMLElement).getAttribute('data-ratio')) {
          ratio = Number((e.target as HTMLElement).getAttribute('data-ratio'))
          localStorage.setItem('ratio', (e.target as HTMLElement).getAttribute('data-ratio'))
        } else {
          sex = (e.target as HTMLElement).getAttribute('id')
          localStorage.setItem('sex', (e.target as HTMLElement).getAttribute('id'))
        }

        elements.forEach((activeElement: HTMLElement) => {
          activeElement.classList.remove(activeClass)
          ;(e.target as HTMLElement).classList.add(activeClass)
        })

        calculateTotal()
      })
    })
  }

  getStaticInfo('#gender div', 'calculating__choose-item_active')
  getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active')

  function getDynamicInfo(selector: string) {
    const inputField: HTMLInputElement = document.querySelector(selector)

    inputField.addEventListener('input', () => {
      if (inputField.value.match(/\D/g)) {
        inputField.style.border = '2px solid red'
      } else {
        inputField.style.border = 'none'
      }

      // eslint-disable-next-line default-case
      switch (inputField.getAttribute('id')) {
        case 'height':
          heightField = +inputField.value
          break
        case 'weight':
          weightField = +inputField.value
          break
        case 'age':
          ageField = +inputField.value
          break
      }
    })

    calculateTotal()
  }

  getDynamicInfo('#height')
  getDynamicInfo('#weight')
  getDynamicInfo('#age')
}

export default caloriesCalculator
