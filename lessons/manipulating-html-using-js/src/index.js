const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Человек паук",
    "Шрек",
    "Сорвиголова",
  ],
};

function removeAdvertisements() {
  const ads = document.querySelectorAll(".promo__adv img");

  ads.forEach((item) => {
    item.remove();
  });
}

function changeGenreCategory(genreCategory) {
  const genre = document.querySelector(".promo__genre");
  genre.textContent = genreCategory;
}

function changeMovieBackground(bgImg) {
  const poster = document.querySelector(".promo__bg");
  poster.style.backgroundImage = `url("../src/assets/images/${bgImg}")`;
}
