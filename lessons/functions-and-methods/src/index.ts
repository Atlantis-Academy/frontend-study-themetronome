let numberOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

const totalWatchedMoviesCheck = () => {
  while (numberOfFilms === undefined || numberOfFilms == null || Number.isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}

totalWatchedMoviesCheck()

function lastSeenMovieRate() {
  for (let i = 0; i < 2; i++) {
    const filmName: string = prompt('Один из последних просмотренных фильмов?', '')
    const filmGrade: number = +prompt('Какую оценку вы бы ему поставили?', '')

    if (
      filmName != null &&
      filmGrade != null &&
      filmName !== '' &&
      filmGrade !== undefined &&
      filmName.length < 50
    ) {
      personalMovieDB.movies[filmName] = filmGrade
    } else {
      i--
    }
  }
}

lastSeenMovieRate()

function viewerGrade() {
  if (personalMovieDB.count < 10) {
    console.log('Вы смотрите фильмы довольно редко')
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Обычный кинозритель')
  } else if (personalMovieDB.count >= 30) {
    console.log('Да вы киноман!')
  } else {
    console.log('Ошибка!')
  }
}

viewerGrade()

const showMyDB = () => (personalMovieDB.private === false ? console.log(personalMovieDB) : null)

showMyDB()

function writeYourGenres() {
  for (let i: number = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр №${i}?`)
  }
}

writeYourGenres()
