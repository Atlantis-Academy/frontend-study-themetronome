# Как пользоваться проектом?

------
Для того чтобы воспользоваться доступным функционалом на странице, откройте вкладку `console` в "панели разработчика" вашего браузера (F12):

```
removeAdvertisements(); - удалить все рекламные объявления со страницы

changeGenreCategory(genreCategory); - изменить жанр кинофильма, аргумент функции должен быть типа string

changeMovieBackground(bgImg) - изменить фоновое изображение фильма, аргументом функции должно быть передано название файла изображения(../src/assets/images) в виде строки

getMoviesListFromDB() - получить список фильмов из базы данных, отсортировать их и вывести на страницу
```