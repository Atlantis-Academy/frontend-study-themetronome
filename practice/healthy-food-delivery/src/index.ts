document.addEventListener("DOMContentLoaded", () => {
  const tabs: NodeListOf<Element> = document.querySelectorAll(
    ".tabheader__item",
  );
  const tabsContent: NodeListOf<Element> = document.querySelectorAll(
    ".tabcontent",
  );
  const tabsParent: HTMLElement = document.querySelector(".tabheader__items");

  function makeTabContentHidden(): void {
    tabsContent.forEach((item: HTMLElement) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item: HTMLElement): void => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function makeTabContentVisible(i: number = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  makeTabContentHidden();
  makeTabContentVisible();

  tabsParent.addEventListener("click", (e): void => {
    if (
      e.target &&
      (e.target as HTMLElement).classList.contains("tabheader__item")
    ) {
      tabs.forEach((item: HTMLElement, index: number) => {
        if (e.target == item) {
          makeTabContentHidden();
          makeTabContentVisible(index);
        }
      });
    }
  });

  const countdownData: string = "2020-12-31";

  function getTimeRemaining(endtime: string) {
    const totalMilliseconds: number =
      Date.parse(endtime) - Date.parse(new Date().toString());
    const days: number = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor(
      (totalMilliseconds / (1000 * 60 * 60)) % 24,
    );
    const minutes: number = Math.floor((totalMilliseconds / 1000 / 60) % 60);
    const seconds: number = Math.floor((totalMilliseconds / 1000) % 60);

    return {
      total: totalMilliseconds,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function insertZeroIntoTimer(num: number) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setTimer(selector: any, endtime: any) {
    const timer: any = document.querySelector(selector);
    const days: any = timer.querySelector("#days");
    const hours: any = timer.querySelector("#hours");
    const minutes: any = timer.querySelector("#minutes");
    const seconds: any = timer.querySelector("#seconds");

    const timerInterval: any = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer(): void {
      const timeNow: any = getTimeRemaining(endtime);

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

  const modalWindowTrigger: NodeListOf<Element> = document.querySelectorAll(
    "[data-modal]",
  );
  const modalWindow: HTMLElement = document.querySelector(".modal");
  const modalCloseButton: HTMLElement = document.querySelector("[data-close]");

  modalWindowTrigger.forEach((btn: HTMLButtonElement): void => {
    btn.addEventListener("click", () => {
      modalWindow.classList.add("show");
      modalWindow.classList.remove("hide");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModalWindow(): void {
    modalWindow.classList.remove("show");
    modalWindow.classList.add("hide");
    document.body.style.overflow = "";
  }

  modalCloseButton.addEventListener("click", () => closeModalWindow());

  modalWindow.addEventListener("click", (e: Event) =>
    e.target === modalWindow ? closeModalWindow() : null,
  );

  document.addEventListener("keydown", (e: KeyboardEvent) =>
    e.code === "Escape" && modalWindow.classList.contains("show")
      ? closeModalWindow()
      : null,
  );
});
