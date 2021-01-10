"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
let i = 0,
    nameOfMovie,
    ratingOfMovie;
while(i < 2) {
    nameOfMovie = prompt("Один из последних просмотренных фильмов?", '');
    ratingOfMovie = prompt("На сколько оцените его?", '');
    personalMovieDB.movies[nameOfMovie] = ratingOfMovie;
    i++;
}
console.log(personalMovieDB);