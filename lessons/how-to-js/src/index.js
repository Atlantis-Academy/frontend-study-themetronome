const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const q = prompt("Один из последних просмотренных фильмов?", ""),
  w = prompt("Какую оценку вы бы ему поставили?", ""),
  e = prompt("Один из последних просмотренных фильмов?", ""),
  z = prompt("Какую оценку вы бы ему поставили?", "");

personalMovieDB.movies[q] = w;
personalMovieDB.movies[e] = z;

console.log(personalMovieDB);

