let numberOfFilms;

function initialAmountCheck() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

initialAmountCheck();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function recordFilmsInformation() {
  for (let i = 0; i < 2; i++) {
    const q = prompt("Один из последних просмотренных Вами фильмов?", "");
    const w = prompt("Какую оценку вы бы ему поставили?", "");

    if (q != null && w != null && q !== "" && w !== "" && q.length < 50) {
      personalMovieDB.movies[q] = w;
    } else {
      i--;
    }
  }
}

recordFilmsInformation();

function consoleViewerLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Вы довольно редко смотрите фильмы");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы среднестатистический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Да вы киноман!");
  } else {
    console.log("Ошибка!");
  }
}

consoleViewerLevel();

function showMyDB() {
  if (personalMovieDB.private === false) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр №${i}?`);
  }
}

writeYourGenres();
