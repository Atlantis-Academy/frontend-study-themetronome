const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  totalWatchedMoviesCheck: (): void => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')

    while (personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },
  lastSeenMovieRate(): void {
    for (let i = 0; i < 2; i++) {
      const a: string = prompt('Один из последних просмотренных фильмов?', '')
      const b: number = +prompt('Какую оценку вы бы ему поставили?', '')

      if (a != null && b != null && a !== '' && b !== undefined && a.length < 50) {
        personalMovieDB.movies[a] = b
      } else {
        i--
      }
    }
  },
  viewerGrade(): void {
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
  showMyDB(): void {
    if (personalMovieDB.private === false) {
      console.log(personalMovieDB)
    }
  },
  toggleVisibleMyDB(): void {
    !personalMovieDB.private
  },
  writeYourGenres(): void {
    for (let i = 1; i <= 3; i++) {
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
