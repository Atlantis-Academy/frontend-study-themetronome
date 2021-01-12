let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const totalWatchedMoviesCheck = (): void => {
  while (
    numberOfFilms === undefined ||
    numberOfFilms == null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
};

totalWatchedMoviesCheck();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function lastSeenMovieRate(): void {
  for (let i = 0; i < 2; i++) {
    const a: string = prompt("Один из последних просмотренных фильмов?", "");
    const b: number = +prompt("Какую оценку вы бы ему поставили?", "");

    if (
      a != null &&
      b != null &&
      a !== "" &&
      b !== undefined &&
      a.length < 50
    ) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

lastSeenMovieRate();

function viewerGrade(): void {
  if (personalMovieDB.count < 10) {
    console.log("Вы смотрите фильмы довольно редко");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Обычный кинозритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Да вы киноман!");
  } else {
    console.log("Ошибка!");
  }
}

viewerGrade();

function showMyDB(): void {
  if (personalMovieDB.private === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres(): void {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр №${i}?`);
  }
}

writeYourGenres();
