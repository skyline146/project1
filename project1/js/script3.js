"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель!');
    } else if(personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    }
}

// detectPersonalLevel();

function showMyDB () {
    if(personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let index = 0; index < 3; index++) {
        personalMovieDB.genres[index] = prompt(`Ваш любимый жанр под номером ${index+1}`);
    }
}

writeYourGenres();

showMyDB();