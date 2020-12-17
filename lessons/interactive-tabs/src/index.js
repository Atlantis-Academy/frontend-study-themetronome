document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function makeTabContentHidden() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function makeTabContentVisible(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  makeTabContentHidden();
  makeTabContentVisible();

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, index) => {
        if (e.target == item) {
          makeTabContentHidden();
          makeTabContentVisible(index);
        }
      });
    }
  });
});
