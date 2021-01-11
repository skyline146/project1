"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель!');
        } else if(personalMovieDB.count >= 30) {
            alert('Вы киноман!');
        }
    },
    showMyDB: function() {
        if(personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        let example;
        for (let index = 0; index < 1; index++) {
            example = prompt(`Введите ваши любимые жанры через запятую.`);
            if (example != null && example != '') {
                personalMovieDB.genres = example.split(', ');
            } else {
                alert('Вы нажали отмену, или ввели пустую строку, введите пожалуйста заново!');
                index--;
            }
        }
        personalMovieDB.genres.forEach(function(value, index, array) {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};
