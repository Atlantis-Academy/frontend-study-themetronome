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
