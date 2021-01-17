document.addEventListener('DOMContentLoaded', (): void => {
  const movieDB = {
    movies: ['Логан', 'Лига справедливости', 'Человек паук', 'Шрек', 'Сорвиголова'],
  }

  const ads: NodeListOf<Element> = document.querySelectorAll('.promo__adv img')
  const genre: NodeListOf<Element> = document.querySelectorAll('.promo__genre')
  const poster: HTMLElement = document.querySelector('.promo__bg')
  const moviesList: HTMLElement = document.querySelector('.promo__interactive-list')
  const addForm: HTMLFormElement = document.querySelector('form.add')
  const addInput: HTMLInputElement = document.querySelector('.adding__input')
  const checkbox: HTMLInputElement = document.querySelector('[type="checkbox"]')

  addForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let newMovie: string = addInput.value
    const favorite: boolean = checkbox.checked

    if (newMovie) {
      if (newMovie.length > 21) {
        newMovie = `${newMovie.substring(0, 22)}...`
      }
      if (favorite) {
        console.log('Добавляем новый фильм')
      }

      movieDB.movies.push(newMovie)
      sortArr(movieDB.movies)

      createMoviesList(movieDB.movies, moviesList)
    }

    addForm.reset()
  })

  movieDB.movies.sort()

  function createMoviesList(films: string[], parent: HTMLElement): void {
    parent.innerHTML = ''
    sortArr(films)

    films.forEach((name: string, i: number) => {
      parent.innerHTML += `
      <li class="promo__interactive-item"> ${i + 1}. ${name}
        <div class="delete"></div>
      </li>
    `
    })

    document.querySelectorAll('.delete').forEach((btn: HTMLButtonElement, i: number): void => {
      btn.addEventListener('click', (): void => {
        btn.parentElement.remove()
        movieDB.movies.splice(i, 1)
        createMoviesList(films, parent)
      })
    })
  }

  const removeAdvertisements = (arr: NodeListOf<Element>): void => {
    arr.forEach((item: HTMLElement) => {
      item.remove()
    })
  }

  const changeGenreCategory = (name: string): void => {
    genre.forEach((item: HTMLElement) => {
      item.textContent = name
    })
  }

  const changeMovieBackground = (bgImg: string): void => {
    poster.style.backgroundImage = `url("../src/assets/images/${bgImg}")`
  }

  const sortArr = (arr: string[]) => {
    arr.sort()
  }

  removeAdvertisements(ads)
  createMoviesList(movieDB.movies, moviesList)
})
