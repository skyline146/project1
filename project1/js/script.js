"use strict";

let number1 = 5;
let number2 = 4;

alert(number1+number2);

let result = +prompt("Введите ваш возраст:", "");

if(result < 18) {
    alert("Вам нет 18, покиньте сайт!");
}