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

while(true) {
    nameOfMovie = prompt("Один из последних просмотренных фильмов?", '');
    ratingOfMovie = prompt("На сколько оцените его?", '');
    if(nameOfMovie != "" && ratingOfMovie != "" && nameOfMovie != null && ratingOfMovie != null &&
     nameOfMovie.length < 50 && ratingOfMovie.length < 50){
        personalMovieDB.movies[nameOfMovie] = ratingOfMovie;
        i++;
    } else {
        alert("Ошибка 1 или 2 строка ответа не подходит по правилам,"+
         "либо вы нажали кнопку Отмена, введите пожалуйста заново!");
    }
    if(i == 2){
        break;
    }
}

if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов!');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель!');
} else if(personalMovieDB.count >= 30) {
    alert('Вы киноман!');
}

console.log(personalMovieDB);