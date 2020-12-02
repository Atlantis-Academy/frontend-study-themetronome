const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  totalMoviesCheck: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
      ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  lastSeenMovieRate: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "");
      const b = prompt("Какую оценку вы бы ему поставили?", "");

      if (a != null && b != null && a !== "" && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  viewerGrade: function () {
    if (personalMovieDB.count < 10) {
      console.log("Вы смотрите фильмы довольно редко");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Обычный кинозритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Да вы киноман!");
    } else {
      console.log("Ошибка!");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.private === false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.private = !personalMovieDB.private;
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}?`).toLowerCase();

      if (genre === "" || genre == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};