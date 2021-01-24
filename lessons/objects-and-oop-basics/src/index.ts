const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  totalWatchedMoviesCheck: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')

    while (personalMovieDB.count == null || Number.isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },

  lastSeenMovieRate() {
    for (let i: number = 0; i < 2; i++) {
      const filmName: string = prompt('Один из последних просмотренных фильмов?', '')
      const filmGrade: number = +prompt('Какую оценку вы бы ему поставили?', '')

      if (
        filmName !== null &&
        filmGrade !== null &&
        filmName !== '' &&
        filmGrade !== undefined &&
        filmName.length < 50
      ) {
        personalMovieDB.movies[filmName] = filmGrade
      } else {
        i--
      }
    }
  },

  viewerGrade() {
    if (personalMovieDB.count < 10) {
      console.log('Вы смотрите фильмы довольно редко')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Обычный кинозритель')
    } else if (personalMovieDB.count >= 30) {
      console.log('Да вы киноман!')
    } else {
      console.log('Ошибка!')
    }
  },

  showMyDB: () => (personalMovieDB.private === false ? console.log(personalMovieDB) : null),

  toggleVisibleMyDB() {
    personalMovieDB.private = !personalMovieDB.private
  },

  writeYourGenres() {
    for (let i: number = 1; i <= 3; i++) {
      const genre: string = prompt(`Ваш любимый жанр под номером ${i}?`).toLowerCase()

      if (genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе')
        i--
      } else {
        personalMovieDB.genres[i - 1] = genre
      }
    }

    personalMovieDB.genres.forEach((item: string, i: number) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`)
    })
  },
}
