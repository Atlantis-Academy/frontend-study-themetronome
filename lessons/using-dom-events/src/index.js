document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Человек паук",
      "Шрек",
      "Сорвиголова",
    ],
  };

  const ads = document.querySelectorAll(".promo__adv img");
  const genre = document.querySelectorAll(".promo__genre");
  const poster = document.querySelector(".promo__bg");
  const moviesList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector("form.add");
  const addInput = document.querySelector(".adding__input");
  const checkbox = document.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newMovie = addInput.value;
    const favorite = checkbox.checked;

    if (newMovie) {
      if (newMovie.length > 21) {
        newMovie = `${newMovie.substring(0, 22)}...`;
      }
      if (favorite) {
        console.log("Добавляем новый фильм");
      }

      movieDB.movies.push(newMovie);
      sortArr(movieDB.movies);

      createMoviesList(movieDB.movies, moviesList);
    }

    addForm.reset();
  });

  movieDB.movies.sort();

  function createMoviesList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((name, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item"> ${i + 1}. ${name}
        <div class="delete"></div>
      </li>
    `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMoviesList(films, parent);
      });
    });
  }

  const removeAdvertisements = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const changeGenreCategory = (name) => {
    genre.forEach((item) => {
      item.textContent = name;
    });
  };

  const changeMovieBackground = (bgImg) => {
    poster.style.backgroundImage = `url("../src/assets/images/${bgImg}")`;
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  removeAdvertisements(ads);
  createMoviesList(movieDB.movies, moviesList);
});
