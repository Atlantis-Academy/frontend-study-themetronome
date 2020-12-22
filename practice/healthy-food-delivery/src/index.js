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

  const countdownData = "2020-12-31";

  function getTimeRemaining(endtime) {
    const totalMilliseconds = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalMilliseconds / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalMilliseconds / 1000 / 60) % 60);
    const seconds = Math.floor((totalMilliseconds / 1000) % 60);

    return {
      total: totalMilliseconds,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function insertZeroIntoTimer(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setTimer(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer() {
      const timeNow = getTimeRemaining(endtime);

      days.innerHTML = insertZeroIntoTimer(timeNow.days);
      hours.innerHTML = insertZeroIntoTimer(timeNow.hours);
      minutes.innerHTML = insertZeroIntoTimer(timeNow.minutes);
      seconds.innerHTML = insertZeroIntoTimer(timeNow.seconds);

      if (timeNow.total <= 0) {
        clearInterval(timerInterval);
      }
    }
  }

  setTimer(".timer", countdownData);

  const modalWindowTrigger = document.querySelectorAll("[data-modal]");
  const modalWindow = document.querySelector(".modal");
  const modalCloseButton = document.querySelector("[data-close]");

  modalWindowTrigger.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalWindow.classList.add("show");
      modalWindow.classList.remove("hide");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModalWindow() {
    modalWindow.classList.remove("show");
    modalWindow.classList.add("hide");
    document.body.style.overflow = "";
  }

  modalCloseButton.addEventListener("click", () => closeModalWindow());

  modalWindow.addEventListener("click", (e) =>
    e.target === modalWindow ? closeModalWindow() : null,
  );

  document.addEventListener("keydown", (e) =>
    e.code === "Escape" && modalWindow.classList.contains("show")
      ? closeModalWindow()
      : null,
  );
});
