const numberOfFilms: number = +prompt('Сколько фильмов вы уже посмотрели?', '')

const firstFilmOfLastWatched: string = prompt('Один из последних просмотренных фильмов?', '')
const firstFilmGrade: number = +prompt('Какую оценку вы бы ему поставили?', '')
const secondFilmOfLastWatched: string = prompt('Один из последних просмотренных фильмов?', '')
const secondFilmGrade: number = +prompt('Какую оценку вы бы ему поставили?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

personalMovieDB.movies[firstFilmOfLastWatched] = firstFilmGrade
personalMovieDB.movies[secondFilmOfLastWatched] = secondFilmGrade

console.log(personalMovieDB)
