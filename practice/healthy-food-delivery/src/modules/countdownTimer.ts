function countdownTimer(id: string, deadline: string) {
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

  setTimer(id, deadline)
}

export default countdownTimer
