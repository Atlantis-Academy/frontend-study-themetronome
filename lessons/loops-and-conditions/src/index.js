const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const q = prompt("Один из последних просмотренных Вами фильмов?", "");
  const w = prompt("Какую оценку вы бы ему поставили?", "");

  if (q != null && w != null && q !== "" && w !== "" && q.length < 50) {
    personalMovieDB.movies[q] = w;
  } else {
    i--;
  }
}

console.log(personalMovieDB);
