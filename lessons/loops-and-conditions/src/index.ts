/* eslint-disable no-alert, no-console */
export {}

const numberOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

for (let i = 0; i < 2; i += 1) {
  const filmName: string = prompt('Один из последних просмотренных Вами фильмов?', '')
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
    i -= 1
  }
}

if (personalMovieDB.count < 10) {
  console.log('Вы довольно редко смотрите фильмы')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы среднестатистический зритель')
} else if (personalMovieDB.count >= 30) {
  console.log('Да вы киноман!')
} else {
  console.log('Ошибка!')
}

console.log(personalMovieDB)
