const numberOfFilms: number = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const q: string = prompt("Один из последних просмотренных фильмов?", "");
const w: number = +prompt("Какую оценку вы бы ему поставили?", "");
const e: string = prompt("Один из последних просмотренных фильмов?", "");
const z: number = +prompt("Какую оценку вы бы ему поставили?", "");

personalMovieDB.movies[q] = w;
personalMovieDB.movies[e] = z;

console.log(personalMovieDB);
