const movieDB = {
  movies: ['Логан', 'Лига справедливости', 'Человек паук', 'Шрек', 'Сорвиголова'],
}

function removeAdvertisements() {
  const ads: NodeListOf<Element> = document.querySelectorAll('.promo__adv img')

  ads.forEach((item: HTMLElement) => {
    item.remove()
  })
}

function changeGenreCategory(genreCategory: string) {
  const genre: HTMLElement = document.querySelector('.promo__genre')
  genre.textContent = genreCategory
}

function changeMovieBackground(bgImg: string) {
  const poster: HTMLElement = document.querySelector('.promo__bg')
  poster.style.backgroundImage = `url("../src/assets/images/${bgImg}")`
}

function getMoviesListFromDB() {
  const moviesList: HTMLElement = document.querySelector('.promo__interactive-list')
  moviesList.innerHTML = ''
  movieDB.movies.sort()
  movieDB.movies.forEach((name: string, i: number) => {
    moviesList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1}. ${name}
      <div class="delete"></div>
    </li>
  `
  })
}
