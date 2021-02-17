function menuTabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabs: NodeListOf<Element> = document.querySelectorAll(tabsSelector)
  const tabsContent: NodeListOf<Element> = document.querySelectorAll(tabsContentSelector)
  const tabsParent: HTMLElement = document.querySelector(tabsParentSelector)

  function makeTabContentHidden() {
    tabsContent.forEach((item: HTMLElement) => {
      item.classList.add('hide')
      item.classList.remove('show', 'fade')
    })

    tabs.forEach((item: HTMLElement) => {
      item.classList.remove(activeClass)
    })
  }

  function makeTabContentVisible(i: number = 0) {
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add(activeClass)
  }

  makeTabContentHidden()
  makeTabContentVisible()

  tabsParent.addEventListener('click', (e: Event) => {
    if (e.target && (e.target as HTMLElement).classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item: HTMLElement, index: number) => {
        if (e.target === item) {
          makeTabContentHidden()
          makeTabContentVisible(index)
        }
      })
    }
  })
}

export default menuTabs
